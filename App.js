/* eslint-disable no-unused-vars */
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, RegistrationScreen, MessagesScreen} from './apps/screens';

import BottomTabNavigator from './apps/navigation/Navigator';
import {COLORS} from './apps/constants';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={COLORS.richCarmine}
        barStyle="light-content"
      />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'LoginScreen'}>
        <Stack.Screen name="MessagesScreen" component={BottomTabNavigator} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
