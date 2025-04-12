import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from '../constants/colors'
import { useState } from "react";

export default function StartGameScreen({onPickNumber}:any)
{
    const [enteredNumber, setEnteredNumber] = useState<string>('')
    
    const numberInputHandler = (enteredText:string) =>
    {
        setEnteredNumber(enteredText)
    }

    const resetInputHandler = () =>
    {
        setEnteredNumber('')
    }

    const confirmInputHandler = () =>
    {
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
        {
            Alert.alert('Invalid Number', 'Number has to be a number between 1 and 99,',[{text:'Okay', style:'destructive', onPress: resetInputHandler}]);
            return;
        }

        onPickNumber(chosenNumber)
    }
    
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad" 
                autoCapitalize="none" 
                autoCorrect={false} 
                value={enteredNumber}
                onChangeText={numberInputHandler}/>
            <View style={styles.buttonsContainer} >
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        inputContainer: {
            justifyContent:'center',
            alignItems:'center',
            marginTop:100,
            marginHorizontal:24,
            padding:16,
            backgroundColor: Colors.primary800,
            borderRadius:6,
            elevation: 4, // For Android
            shadowColor: 'black', // For Android and IOS
            shadowOffset: {width: 0, height: 2}, // For IOS
            shadowRadius: 6, // For IOS
            shadowOpacity: 0.25 // For IOS
        },
        numberInput: {
            height:50,
            width:50,
            fontSize:32,
            borderBottomColor: Colors.accent500,
            borderBottomWidth: 2,
            color: Colors.accent500,
            marginVertical: 8,
            fontWeight: 'bold',
            textAlign:'center'
        },
        buttonsContainer: {
            flexDirection: 'row'
        },
        buttonContainer: {
            flex:1
        }
    }
)

