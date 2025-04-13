import { Alert, FlatList, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from '@expo/vector-icons'
import GuessLogItem from "../components/game/GuessLogItem";

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

export default function GameScreen({userNumber, onGameOver}:any)
{
    const initialGuess = generateRandomBetween(1,100, userNumber)
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    const {width, height} = useWindowDimensions();

    useEffect(() =>
    {
        if(currentGuess === userNumber)
            onGameOver(guessRounds.length);
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() =>
    {
        minBoundary = 1
        maxBoundary = 100
    }, [])

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
        setGuessRounds(prev => [newRndNumber, ...prev])
    }

    const guessRoundsListLength = guessRounds.length

    let content = <>
        <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                            <Ionicons name="remove" size={24} color={'white'}/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('greater')}>
                        <Ionicons name="add" size={24} color={'white'}/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
    </>

    if(width > 500)
    {
        content = <>
            <View style={styles.buttonsContainerWide}>
            <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                            <Ionicons name="remove" size={24} color={'white'}/>
                        </PrimaryButton>
                    </View>
            <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('greater')}>
                        <Ionicons name="add" size={24} color={'white'}/>
                        </PrimaryButton>
                    </View>
            </View>
        </>
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList 
                    data={guessRounds} 
                    renderItem={(itemData) => <GuessLogItem  roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>} 
                    keyExtractor={(item, index) => index+'-'+item.toString()}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:24,
        alignItems: 'center'
    },
    instructionText: {
        marginBottom:12
    },
    buttonsContainer: {
        flexDirection:'row'
    },
    buttonContainer: {
        flex:1
    },
    buttonsContainerWide: {
        flexDirection:'row',
        alignItems:'center'
    },
    listContainer: {
        flex:1,
        padding: 16
    }
})