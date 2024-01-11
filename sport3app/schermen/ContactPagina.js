import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform, Image, TouchableOpacity } from 'react-native';


import Contact from '../components/Contact';

const ContactPagina = ({ navigation }) => {
    

const [contact, getcontact] = useState([]);

    const getContact = async () => {
        try {
            let url;
            if (Platform.OS == 'android'){
                url = "http://10.0.2.2:32812/api/contact/";
            }
            else {
                url = "http://sport3.ddev.site/api/contact/";
              }
        
            const response = await fetch(url, {
                "method" : "GET",
            });
            const json = await response.json();
            console.log(json);

            getcontact(json.items);
         } catch (error){
            console.error(error);
         }
        }

        useEffect(() => {
            getContact();
        }, []);

        return (
            <View style={styles.scherm}>
 <Image
        source={{ uri: 'https://images.unsplash.com/photo-1560354765-02010876efff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        style={styles.image}
      />


               <Text style={styles.title}> Contact </Text>


               <FlatList
               data={contact}
               keyExtractor={item => item.id}
               renderItem={({ item }) => {

              return <Contact
                richText={item.richtext}
                navigation={navigation}
                onSelectArticle={(selectedId) => { navigation.navigate('Details', { id: selectedId }) }}
               />
            }
        }
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
            marginBottom: 60,
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
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#ffa015',
            padding: 10,
            marginBottom: -205,
          },
          navItems: {
            paddingVertical: 10,
          },
          navText: {
            color: '#fff',
          },
          image: {
            width: 500,
            height: 100,
            resizeMode: 'cover',
          },
      });

    export default ContactPagina;















