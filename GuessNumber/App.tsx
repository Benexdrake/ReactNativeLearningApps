import {View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors'
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() 
{
  const [userNumber, setUserNumber] = useState<number>(0)
  const [gameIsOver, setGameIsOver] = useState<boolean>(true)
  const [guessRounds, setGuessRounds] = useState<number>(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if(!fontsLoaded)
    return <AppLoading/>

  
  const pickedNumberHandler = (pickedNumber:number) =>
  {
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  } 

  const gameOverHandler = (numberOfRounds:number) =>
  {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  }

  const startNewGameHandler = () =>
  {
    setUserNumber(0);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber > 0)
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  
  if(gameIsOver && userNumber > 0)
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>



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