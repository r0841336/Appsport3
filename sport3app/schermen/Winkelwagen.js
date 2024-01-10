import React, { useState } from 'react';
import { View } from 'react-native';
import ArticleDetail from '../components/ArticleDetail';

const CartScreen = ({ route, navigation }) => {
  // Verkrijg de id van route.params
  const { id } = route.params;
  const [cart, setCart] = useState([]);

  const addToCart = (article) => {
    setCart([...cart, article]);
  };

  return (
    <View>
      {/* Verwijder de volgende regel, omdat het niet nodig is en een fout veroorzaakt */}
      {/* navigation.navigate('CartScreen', { id: articleId }); */}
      
      <ArticleDetail articleId={id} addToCart={addToCart} />
      {/* ... */}
    </View>
  );
};

export default CartScreen;
