import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform, TouchableOpacity } from 'react-native';
import Product from '../components/Product';

const ProductScherm = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getProducten = async () => {
    try {
      let url;
      if (Platform.OS === 'android') {
        url = 'http://10.0.2.2:32812/api/sport/';
      } else {
        url = 'http://sport3.ddev.site/api/sport/';
      }

      const response = await fetch(url, {
        method: 'GET',
      });
      const json = await response.json();
      console.log(json);

      setProducts(json.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducten();
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  let filteredProducts;

  if (selectedCategory) {
    filteredProducts = products.filter((product) => product.categorie === selectedCategory);
  } else {
    filteredProducts = products;
  }
  

  return (
    <View style={styles.scherm}>
      <Text style={styles.title}>Onze producten</Text>

      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => filterByCategory(null)} style={styles.filterButton}>
          <Text>Show All</Text>
        </TouchableOpacity>

        {Array.from(new Set(products.map((product) => product.categorie))).map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => filterByCategory(category)}
            style={styles.filterButton}
          >
            <Text>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (Platform.OS === 'android') {
            item.bannerImg = item.bannerImg.replace('sport3.ddev.site', '10.0.2.2:32812');
          }
          return (
            <Product
              id={item.id}
              title={item.productTitle}
              categorie={item.categorie}
              price={item.price}
              banner={item.bannerImg}
              navigation={navigation}
           onSelectArticle={(selectedId) => {
          navigation.navigate('Details', { id: selectedId });
        }}
              
            />
          );
        }}
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
        <TouchableOpacity onPress={() => navigation.navigate('Winkelwagen')} style={styles.navItems}>
          <Text style={styles.navText}>Winkelwagen</Text>
        </TouchableOpacity>
      </View>
         </View>
        );
    }


    const styles = StyleSheet.create({
        scherm: {
            alignItems: 'center',
            marginBottom: 110,
            backgroundColor: 'white',
            paddingBottom: 60,
        },

        title: {
            marginBottom: 20,
            fontSize: 26,
            fontWeight: 'bold',
        },
        navigatie: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          backgroundColor: '#ffa015',
          padding: 10,

        },
        navItems: {
          paddingVertical: 10,
        },
        navText: {
          color: '#fff',
        },
        filterContainer: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          marginBottom: 10,
          backgroundColor: '#f0f0f0',
          paddingVertical: 10,
        },
        filterButton: {
          padding: 5,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#ccc',
          backgroundColor: '#fff',
        },
        filterButtonText: {
          color: '#333',
        },
        flatList: {
          width: '100%',
        },
 
      });

    export default ProductScherm;















