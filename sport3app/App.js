import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductScherm from './schermen/ProductScherm';
import ProductDetail from './schermen/ProductDetail';
import Blog from './schermen/Blog';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="producten" component={ProductScherm} />
        <Stack.Screen name="Details" component={ProductDetail} />
        <Stack.Screen name="Blog" component={Blog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}