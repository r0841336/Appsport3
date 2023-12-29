import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Platform } from 'react-native';



import Product from '../components/Product';


const ProductScherm = ({ navigation }) => {

const [products, getproducts] = useState([]);

    const getProducten = async () => {
        try {
            let url;
            if (Platform.OS == 'android'){
                url = "http://10.0.2.2:32812/api/sport";
            }
            else {
                url = "http://sport3.ddev.site/api/sport";
              }
        
            const response = await fetch(url, {
                "method" : "GET",
            });
            const json = await response.json();
            console.log(json);

            getproducts(json.items);
         } catch (error){
            console.error(error);
         }
        }

        useEffect(() => {
            getProducten();
        }, []);

        return (
            <View>
               <Text> Onze producten </Text>
               <FlatList
               data={products}
               keyExtractor={item => item.id}
               renderItem={({ item }) => {
               if (Platform.OS == 'android'){
                item.bannerImg = item.bannerImg.replace("sport3.ddev.site", "10.0.2.2:32812" )
              }
              return <Product
                id={item.id}
                title={item.productTitle}
                price={item.price}
                banner={item.bannerImg}
                navigation={navigation}
                onSelectArticle={(selectedId) => { navigation.navigate('Details', { id: selectedId }) }}
               />
            }
        }
        />
         </View>
        );
    }

    export default ProductScherm;















