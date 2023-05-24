import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const data = [
  { id: 1, uri: 'https://via.placeholder.com/300' },
  { id: 2, uri: 'https://via.placeholder.com/350' },
  { id: 3, uri: 'https://via.placeholder.com/400' },
];

export default function Home({ navigation }) {
  const [cards, setCards] = useState(data);

  const onSwipedRight = (index) => {
    navigation.navigate('Messages', { card: cards[index] });
  }

  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={(card) => (
          <Image 
            style={styles.clothesImage}
            source={{uri: card.uri}}
          />
        )}
        onSwipedRight={onSwipedRight}
        onSwipedAll={() => setCards([])}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff', // Changed to white background
  },
  clothesImage: {
    width: 300,
    height: 600,
    borderRadius: 15,
    alignSelf: 'center',
  },
});