/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreens, RegistrationScreen} from './apps/screens';

import Tabs from './apps/navigation/Tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'HomeScreen'}>
        <Stack.Screen name="HomeScreen" component={Tabs} />
        <Stack.Screen name="LoginScreen" component={LoginScreens} />
        <Stack.Screen name="RegisterScreen" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
