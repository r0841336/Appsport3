import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';



const CartScreen = ({ route }) => {
  const { cartItems } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Winkelwagentje</Text>
      <FlatList
    data={cartItems}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
        <View style={styles.cartItem}>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
        </View>
    )}
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