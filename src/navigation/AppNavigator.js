import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegistrationScreen from '../screens/Auth/RegistrationScreen';
import HomeScreen from '../screens/Main/HomeScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import filterScreen from '../screens/Main/filterScreen';
import ServiceListScreen from '../screens/Main/ServiceListScreen';
import ServiceDetailsScreen from '../screens/Main/ServiceDetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="filterScreen" component={filterScreen} />
      <Stack.Screen name="ServiceListScreen" component={ServiceListScreen} />
      <Stack.Screen name="ServiceDetailsScreen" component={ServiceDetailsScreen} />
    </Stack.Navigator>
  );
}
