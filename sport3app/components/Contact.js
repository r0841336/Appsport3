import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Contact = props => {

    const removePTags = htmlString => {
        let newString = htmlString.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '');
        newString = newString.replace(/<div[^>]*>/g, '').replace(/<\/div>/g, '');
        newString = newString.replace(/<h3[^>]*>/g, '').replace(/<\/h3>/g, '');
        newString = newString.replace(/<li[^>]*>/g, '').replace(/<\/li>/g, '');
        newString = newString.replace(/<ul[^>]*>/g, '').replace(/<\/ul>/g, '');
        newString = newString.replace(/<a href[^>]*>/g, '').replace(/<\/ul>/g, '');
        newString = newString.replace(/<a[^>]*>/g, '').replace(/<\/a>/g, '');


        return newString;
    };

    const formattedRichText = removePTags(props.richText);

    return (

            <View style={styles.kader}>
                <Text style={styles.products}>{props.id}</Text>
                <Text style={styles.products} numberOfLines={null}>{formattedRichText}</Text>
            </View>

    );
}

const styles = StyleSheet.create({

    bannerImg: {
      height: 100,
    },

    products: {
        textAlign: 'center',
    },

 });


export default Contact;