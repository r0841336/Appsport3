import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Product = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectArticle(props.id)}>
      <View>
        <Image
          source={{
            uri: props.bannerImg
          }}
        />
        <Text >{props.title}</Text>
        <Text >{props.price}</Text>
      </View>
    </TouchableOpacity >

  );
}

export default Product;