import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

const generateRandomBetween = (min:number, max:number, exclude:number) =>
{
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude)
        return generateRandomBetween(min, max, exclude);
    else
        return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({userNumber}:any)
{
    const initialGuess = generateRandomBetween(minBoundary,maxBoundary, userNumber)
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess)

    const nextGuessHandler = (direction:string) =>
    {
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) 
        {
            Alert.alert('Dont Lie!', 'You know this is wrong...', [{text:'Sorry!', style:'cancel'}])
            return;
        }

        if(direction === 'lower')
        {
            maxBoundary = currentGuess;
        }
        else
        {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary,maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber)
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler('greater')}>+</PrimaryButton>
                </View>
            </View>
            <View>
                {/* LOG ROUNDS */}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:24,
        paddingTop:64
    }
})