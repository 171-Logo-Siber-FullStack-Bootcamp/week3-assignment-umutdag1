/* Fundamentals */
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
/* Externals */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
/* Screens */
import MainScreen from './src/screens/MainScreen';
import MenuScreen from './src/screens/MenuScreen';
import DataScreen from './src/screens/DataScreen';

// https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/MaterialCommunityIcons.json --> Icons

export default function App() {

  const Tab = createBottomTabNavigator();

  const { width, height } = Dimensions.get('window');

  //Guideline sizes are based on standard ~5" screen mobile device
  const guidelineBaseWidth = 350;
  const guidelineBaseHeight = 680;

  const scale = (size, screenWidth = width) => screenWidth / guidelineBaseWidth * size;
  const verticalScale = (size, screenHeight = height) => screenHeight / guidelineBaseHeight * size;
  const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

  console.log("aa");

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Menu"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="menu" color={color} size={size} />
            ),
          }}
        >
          {props => <MenuScreen {...props} scales={{ scale, verticalScale, moderateScale }}></MenuScreen>}
        </Tab.Screen>
        <Tab.Screen
          name="Data"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="code-json" color={color} size={size} />
            ),
          }}
        >
          {props => <DataScreen {...props} scales={{ scale, verticalScale, moderateScale }}></DataScreen>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
