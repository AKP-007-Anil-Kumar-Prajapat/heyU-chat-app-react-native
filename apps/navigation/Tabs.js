/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MessagesScreen,
  GroupsScreen,
  ContactScreen,
  ProfileScreen,
} from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{
          tabBarLabel: 'Message',
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
        name="GroupsScreen"
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
        name="ContactScreen"
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
        name="ProfileScreen"
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

export default Tabs;

const styles = StyleSheet.create({});
