import React from 'react';

export const CardContext = React.createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = React.useState([]);

  const addCard = (card) => {
    setCards(prevCards => [...prevCards, card]);
  };

  return (
    <CardContext.Provider value={{ cards, addCard }}>
      {children}
    </CardContext.Provider>
  );
};
