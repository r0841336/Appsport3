import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';

import Article from '../components/ArticleDetail';


const ProductDetail = ({route, navigation}) => {
    const { id} = route.params;
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const newItem = {id: id, title: id  }; 
        setCartItems(prevItems => [...prevItems, newItem]);
    }, []);

    return (
        <View>
            <Article 
            articleId={id}
         />
                             <View style={styles.navigatie}>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={styles.navItems}>
          <Text style={styles.navText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('producten')} style={styles.navItems}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Team')} style={styles.navItems}>
          <Text style={styles.navText}>Team</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Winkelwagen', {cartItems: cartItems})} style={styles.navItems}>
          <Text style={styles.navText}>Winkelwagen</Text>
        </TouchableOpacity>
      </View>
        </View>
        
    )
}

const styles = StyleSheet.create({

 navigatie: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#ffa015',
    padding: 10,
    marginTop: -59,

 },
 navItems: {
    paddingVertical: 10,
 },
 navText: {
    color: '#fff',
 },
 

});
export default ProductDetail;