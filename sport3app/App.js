import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import ProductScherm from './schermen/ProductScherm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="producten" component={ProductScherm} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

