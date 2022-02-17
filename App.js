/* Fundamentals */
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
/* Externals */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
/* Screens */
import LoginScreen from './src/screens/LoginScreen';
import MenuScreen from './src/screens/MenuScreen';
import DataScreen from './src/screens/DataScreen';

//import BackgroundImage from './assets/json.png';

// https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/MaterialCommunityIcons.json --> Icons

export default function App() {
  
  const Tab = createBottomTabNavigator();

  const bottomNavigation = (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="menu" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Data"
          component={DataScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="code-json" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )

  return (
    bottomNavigation
    // <View style={styles.container}>
    //   {/* <LoginScreen></LoginScreen> */}
    //   {/* <MenuScreen></MenuScreen> */}
    //   <DataScreen bottomNavigation={bottomNavigation}></DataScreen>
    //   {/* <ImageBackground source={BackgroundImage} resizeMode="center" imageStyle={{opacity : 1}} style={styles.backgroundImage}>

    //   </ImageBackground> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  backgroundImage: {
    flex: 1,
  }
});
