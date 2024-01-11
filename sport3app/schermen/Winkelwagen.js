import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CartScreen = ({ route }) => {
  const { cartItems } = route.params;
  const productsData = [

{ id: 225, title: 'The joker gloves', price: 120 },
{ id: 73, title: 'Grip boost gloves peace sign', price: 50 },
{ id: 70, title: 'the american mouthguard', price: 22 },
{ id: 44, title: 'Nike alpha drip cleats', price: 270 },
{ id: 41, title: 'Battle gloves proud of america', price: 45.47 },
{ id: 36, title: 'Wilson american football ball', price: 99.99 },
{ id: 33, title: 'Riddle speedflex 5Gen', price: 344.9 },
{ id: 29, title: 'Girdle pants', price: 13.56 },
{ id: 3, title: 'Xenix pro football helm', price: 12.88 },

  ];

  const getCartItemData = (productId) => {
    return productsData.find((product) => product.id === productId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Winkelwagentje</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const productData = getCartItemData(item.id);

          return (
            <View style={styles.cartItem}>
              <Text>{productData.title}</Text>
              <Text>{productData.price}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CartScreen;
