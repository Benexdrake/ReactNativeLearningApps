import {View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors'

export default function App() 
{
  const [userNumber, setUserNumber] = useState<number>(0)
  
  const pickedNumberHandler = (pickedNumber:number) =>
  {
    setUserNumber(pickedNumber);
  } 

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber > 0)
  {
    screen = <GameScreen userNumber={userNumber}/>
  }

  return ( 
    <LinearGradient 
      colors={[Colors.primary700, Colors.accent500]} 
      style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/dices.jpg')} 
        resizeMode='cover' 
        style={styles.rootScreen} 
        imageStyle={styles.backgroundImage}>
        <View style={styles.rootScreen}>
        {/* SafeAreaView for Phones with Notches. */}
          {screen}
        </View>
      </ImageBackground>
    </LinearGradient>
   );
}

const styles = StyleSheet.create({
  rootScreen : {
    flex:1
  }, 
  backgroundImage: {
    opacity:0.15
  }
})