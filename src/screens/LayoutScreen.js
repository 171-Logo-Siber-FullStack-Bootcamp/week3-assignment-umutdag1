/* Fundamentals */
import { Platform, Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
/* Externals */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
/* Screens */
import MenuScreen from './MenuScreen';
import DataScreen from './DataScreen';

export default function LayoutScreen(props) {

    const params = props?.route?.params;

    const { width, height } = Dimensions.get('window');
    const { scale, verticalScale, moderateScale } = props?.scales;

    const Tab = createBottomTabNavigator();

    console.log("layout Test");

    return (
        <NavigationContainer independent={true}>
          <Tab.Navigator >
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
                )
              }}
            >
              {props => <DataScreen {...props} scales={{ scale, verticalScale, moderateScale }}></DataScreen>}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      );
}