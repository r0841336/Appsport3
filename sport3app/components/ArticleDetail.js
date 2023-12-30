import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform, Button } from 'react-native';

const ArticleDetail = props => {
    const [article , setArticle ] = useState({})

    const getArticleData = async () => {
        try {
            let url;
            if (Platform.OS == 'android'){
                url = "http://10.0.2.2:32812/api/sport/";
            }
            else {
                url = "http://sport3.ddev.site/api/sport/";
              }
        url += props.articleId;

        
      const response = await fetch(url, {
        "method": "GET",
      });
      const json = await response.json();
      if (Platform.OS == 'android'){
        article.bannerImg = article.bannerImg

    }
    
      setArticle(json);
    } catch (error){
      console.error(error);
    

    }
    //console.log(props.articleId);
    //request naar CMS
  }

  useEffect(() => {
    getArticleData();
  }, []);


  return (
    <ScrollView>
      <Image
      style={styles.image}
        source={{
          uri: "article.bannerImg"
        }}
      />
      <View style={styles.alg}>
        <Text style={styles.title}> {article.productTitle}</Text>
        <Text style={styles.categorie}>{article.categorie}</Text>
        <Text style={styles.prijs}>€ {article.price}</Text>
        <Text style={styles.fulltekst}>{article.fullText}</Text>
      </View>
      <Button
        title="Plaats in winkelwagen"
      />
    </ScrollView >
  );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
      },
    title: {
        marginBottom: 20,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign:'center',
    },

    categorie: {
        marginBottom: 20,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign:'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
    },
    prijs: {
        marginBottom: 20,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign:'center',
    },

    fulltekst: {
        marginBottom: 20,
        fontSize: 16,
        marginLeft: 20,
 
    },

  });

export default ArticleDetail;