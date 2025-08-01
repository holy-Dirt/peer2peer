import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PublishRequestScreen from '../screens/PublishRequestScreen';
import KarmaScreen from '../screens/KarmaScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Publish" component={PublishRequestScreen} />
      <Tab.Screen name="Profile" component={KarmaScreen} />
    </Tab.Navigator>
  );
}
