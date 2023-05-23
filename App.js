import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa as página da aplicação
import Menu from './src/pages/Menu.js';
import Ler from './src/pages/Ler.js';
import Adicionar from './src/pages/Adicionar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Adicionar" component={Adicionar} />
       <Stack.Screen name="Ler" component={Ler} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}