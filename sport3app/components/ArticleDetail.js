import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform, Button } from 'react-native';

const ArticleDetail = (props) => {
  const [article, setArticle] = useState({});
  const [cart, setCart] = useState([]);

  const getArticleData = async () => {
    try {
      let url;
      if (Platform.OS === 'android') {
        url = "http://10.0.2.2:32812/api/sport/";
      } else {
        url = "http://sport3.ddev.site/api/sport/";
      }
      url += props.articleId;

      const response = await fetch(url, {
        "method": "GET",
      });
      const json = await response.json();
      if (Platform.OS === 'android') {
        json.bannerImg = json.bannerImg.replace("sport3.ddev.site", "10.0.2.2:32812");
      }

      setArticle(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticleData();
  }, []);

  const addToCart = () => {
    console.log("Adding to cart:", article.productTitle);
    setCart([...cart, article]);
    
  };

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: article.bannerImg,
        }}
      />
      <View style={styles.alg}>
        <Text style={styles.title}> {article.productTitle}</Text>
        <Text style={styles.categorie}>{article.categorie}</Text>
        <Text style={styles.prijs}>€ {article.price}</Text>
        <Button
          style={styles.btn}
          title="Plaats in winkelwagen"
          onPress={addToCart}
        />
        <Text style={styles.beschrijvingtitle}> Beschrijving</Text>
        <Text style={styles.fulltekst}>{article.fullText}</Text>
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
  },
  title: {
    marginBottom: 20,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categorie: {
    marginBottom: 20,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  prijs: {
    marginBottom: 20,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fulltekst: {
    marginBottom: 80,
    fontSize: 12,
    marginLeft: 20,
    marginTop: 10,
  },
  btn: {
    marginBottom: 20,
  },
  beschrijvingtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  },

});

export default ArticleDetail;
