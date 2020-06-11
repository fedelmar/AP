import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/home';
import Esponjas from './Screens/esponjas/';
import Sesion from './Screens/sesion'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ap App' }}/>
        <Stack.Screen name="Esponjas" component={Esponjas} options={{ title: 'Planilla Esponjas'}} />
        <Stack.Screen name="Sesion" component={Sesion} options={{ title: 'Secion Iniciada' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

