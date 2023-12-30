import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Product = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectArticle(props.id)}>
      <View style={styles.kader}>
        <Image
        style={styles.bannerImg}
          source={{
            uri: "props.bannerImg"
          }}
        />
        <Text style={styles.products}>{props.title}</Text>
        <Text style={styles.products}>{props.categorie}</Text>
        <Text style={styles.products}>€ {props.price}</Text>
      </View>
    </TouchableOpacity >

  );
}

const styles = StyleSheet.create({

    bannerImg: {
      height: 100,
    },

    products: {
        textAlign: 'center',
    },

    kader: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,

    }

  });


export default Product;