import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Product = ({ id, title, categorie, price, banner, navigation, onSelectArticle }) => {
  return (
    <TouchableOpacity onPress={() => onSelectArticle(id)}>
      <View style={styles.productContainer}>
        <Image source={{ uri: banner }} style={styles.productImage} />
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productCategory}>{categorie}</Text>
        <Text style={styles.productPrice}>€ {price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    height: 150,
    width: '70%', 
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productCategory: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Product;
