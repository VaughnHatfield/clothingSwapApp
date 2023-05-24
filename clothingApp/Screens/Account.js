import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const profileImagePlaceholder = 'https://via.placeholder.com/400'; // Placeholder image URL

const data = [
  {
    id: '1',
    image: 'https://via.placeholder.com/300', // Placeholder image URL
    title: 'Item 1',
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/350', // Placeholder image URL
    title: 'Item 2',
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/400', // Placeholder image URL
    title: 'Item 3',
  },
];

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: profileImagePlaceholder }} style={styles.profileImage} />
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileName}>Your Name</Text>
          <TouchableOpacity style={styles.plusButton}>
            <Text style={styles.plusButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Other styles...
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    // Other styles...
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // Other styles...
  },
  profileInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    // Other styles...
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    // Other styles...
  },
  plusButton: {
    backgroundColor: 'blue',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // Other styles...
  },
  plusButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    // Other styles...
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    // Other styles...
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
    // Other styles...
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    // Other styles...
  },
  itemTitle: {
    marginTop: 5,
    // Other styles...
  },
  // Other styles...
});

export default AccountScreen;
