import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Teamlid = ({  naam, email, omschrijving, bannerImg }) => {
  return (

      <View style={styles.teamlidContainer}>
        <Image source={{ uri: bannerImg }} style={styles.teamlidImage} />
        <Text style={styles.teamlidTitle}>{naam}</Text>
        <Text style={styles.teamlidCategory}>{email}</Text>
        <Text style={styles.teamlidPrice}>{omschrijving}</Text>
      </View>

  );
};

const styles = StyleSheet.create({
  teamlidContainer: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8, 
    shadowColor: '#000',  
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  teamlidImage: {
    height: 150,
    width: '70%', 
  },
  teamlidTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  teamlidCategory: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555', 
  },
  teamlidPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
});

export default Teamlid;
