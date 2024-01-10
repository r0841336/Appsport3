import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import ProductScherm from './schermen/ProductScherm';
import ProductDetail from './schermen/ProductDetail';
import TeamPagina from './schermen/TeamPagina';
import ContactPagina from './schermen/ContactPagina';
import Winkelwagen from './schermen/Winkelwagen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="producten" component={ProductScherm} />
        <Stack.Screen name="Details" component={ProductDetail} />
        <Stack.Screen name="Team" component={TeamPagina} />
        <Stack.Screen name="Contact" component={ContactPagina} />
        <Stack.Screen name="Winkelwagen" component={Winkelwagen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}