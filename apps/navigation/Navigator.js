/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View, Alert, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MessagesScreen,
  GroupsScreen,
  ContactScreen,
  ProfileScreen,
  PostScreen,
  HomeScreen,
  LoginScreen,
  RegistrationScreen,
} from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS} from '../constants';
import Ripple from 'react-native-material-ripple';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'ExerciseHomeScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen />
      <Stack.Screen />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      <Tab.Screen
        name="TabMessagesScreen"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="message-text-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TabGroupsScreen"
        component={GroupsScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-group-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign
              name="pluscircle"
              color={COLORS.richCarmine}
              size={48}
              style={{top: -25, justifyContent: 'center', alignItems: 'center'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TabContactScreen"
        component={ContactScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TabProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
