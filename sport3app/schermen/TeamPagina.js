import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform, TouchableOpacity } from 'react-native';
import Teamlid from '../components/Team';

const TeamlidPagina = ({ navigation }) => {
  const [teamleden, setTeamleden] = useState([]);

  const getTeamleden = async () => {
    try {
      let url;
      if (Platform.OS === 'android') {
        url = 'http://10.0.2.2:32812/api/team/';
      } else {
        url = 'http://sport3.ddev.site/api/team/';
      }

      const response = await fetch(url, {
        method: 'GET',
      });
      const json = await response.json();
      console.log(json);

      setTeamleden(json.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTeamleden();
  }, []);

  return (
    <View style={styles.scherm}>
      <Text style={styles.title}>Onze teamleden</Text>

      <FlatList
        data={teamleden}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (Platform.OS === 'android') {
            item.bannerImg = item.bannerImg.replace('sport3.ddev.site', '10.0.2.2:32812');
          }
          return (
            <Teamlid
            id={item.id}
            naam={item.naam}
            email={item.email}
            omschrijving={item.omschrijving}
            bannerImg={item.bannerImg} 
            navigation={navigation}
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
};

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
    marginTop: 60,
  },
  navItems: {
    paddingVertical: 10,
  },
  navText: {
    color: '#fff',
  },
});

export default TeamlidPagina;
