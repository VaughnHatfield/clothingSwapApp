import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Divider } from 'react-native-elements';

export default function Messages({ route, navigation }) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (route.params?.card) {
      setMatches(prevMatches => [...prevMatches, route.params.card]);
    }
  }, [route.params]);

  const openChat = (match) => {
    navigation.navigate('Chat', { match });
  }

  const renderCardItem = ({ item }) => (
    <TouchableOpacity onPress={() => openChat(item)}>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: item.uri }} style={styles.image} />
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.match}>
            <Text style={styles.text}>{item.id}</Text>
          </View>
          <Divider style={styles.divider} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCardItem}
        ItemSeparatorComponent={() => <Divider style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  profileContainer: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContainer: {
    flex: 1,
  },
  match: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  divider: {
    backgroundColor: 'white',
  },
  separator: {
    height: 1,
    marginVertical: 10,
    backgroundColor: 'gray',
  },
});