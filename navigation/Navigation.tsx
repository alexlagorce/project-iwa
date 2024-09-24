import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../page/Login'; // Remplacez par le chemin réel de votre composant
import Register from '../page/Register'; // Remplacez par le chemin réel de votre composant
import Home from '../page/Home'; // Remplacez par le chemin réel de votre composant

const Stack = createStackNavigator();

function Navigation() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default Navigation;