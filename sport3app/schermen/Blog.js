
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform } from 'react-native';


const Blog = props => {
  const [blog , setBlog] = useState({})
  const getBlogData = async () => {
    try {
      let url;
      if (Platform.OS == 'android') {
        url = "http://10.0.2.2:32812/api/sport/";
      }
      else {
        url = "http://sport3.ddev.site/api/sport/";
      }


      const response = await fetch(url, {
        "method": "GET",
      });
      const json = await response.json();
      
      setBlog(json);
    } catch (error){
      console.error(error);
    

    }

  }

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: "blog.headerImg"
        }}
      />
      <View style={styles.wrapper}>
        <Text style={styles.body}>{blog.title}</Text>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
  },
  wrapper: {
    padding: 24
  },
  title: {
    fontSize: 24,
    color: "#D24335",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 24,
  },
  body: {
    lineHeight: 24

  }
});
export default Blog;