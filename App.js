import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import BackgroundImage from './assets/json.png';


export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen></LoginScreen>
      {/* <ImageBackground source={BackgroundImage} resizeMode="center" imageStyle={{opacity : 1}} style={styles.backgroundImage}>
        
      </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage : {
    flex : 1,
  }
});
