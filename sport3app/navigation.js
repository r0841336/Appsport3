import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScherm from './schermen/ProductScherm';
import ProductDetail from './schermen/ProductDetail';
import TeamPagina from './schermen/TeamPagina';
import ContactPagina from './schermen/ContactPagina';
import Winkelwagen from './schermen/Winkelwagen';

import Icon from 'react-native-vector-icons/Ionicons'; // You can choose a different set of icons

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Navigation = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Drinks') {
                iconName = focused ? 'beer' : 'beer-outline';
              } else if (route.name === 'About') {
                iconName = focused ? 'information-circle' : 'information-circle-outline';
              }
  
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#E52529',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              height: 70,
              paddingBottom: 10, // Adjust the paddingBottom to add padding to the bottom
            },
            screenOptions: {
              cardStyle: { backgroundColor: '#FF0000' }, // Red
            },
          })}
        >
          <Tab.Screen name="producten" component={HomeScreen} 
           options={{ title: 'producten', headerStyle: { backgroundColor: '#E52529' }, headerTitleStyle: { color: 'white' } }}/>
          <Tab.Screen name="Team" component={DrinksScreen} 
          options={{ title: 'Team', headerStyle: { backgroundColor: '#E52529' }, headerTitleStyle: { color: 'white' } }}/>
          <Tab.Screen name="Contact" component={AboutScreen} 
          options={{ title: 'Contact', headerStyle: { backgroundColor: '#E52529' }, headerTitleStyle: { color: 'white' } }}/>
            <Tab.Screen name="Winkelwagen" component={AboutScreen} 
          options={{ title: 'Winkelwagen', headerStyle: { backgroundColor: '#E52529' }, headerTitleStyle: { color: 'white' } }}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Navigation;