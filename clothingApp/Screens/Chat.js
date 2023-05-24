import React from 'react';
import { View, Text } from 'react-native';

export default function Chat({ route }) {
  const match = route.params.match;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat with match {match.id}</Text>
    </View>
  );
}
