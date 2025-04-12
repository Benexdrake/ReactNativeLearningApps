import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from '../../constants/colors'

export default function PrimaryButton({children, onPress}:any)
{
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={onPress} 
                android_ripple={{color: Colors.primary600}} 
                style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin:4,
        overflow:'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal:16,
        elevation: 2,
        shadowColor: 'black', // For Android and IOS
        shadowOffset: {width: 0, height: 2}, // For IOS
        shadowRadius: 6, // For IOS
        shadowOpacity: 0.25 // For IOS
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed : {
        opacity: 0.75
    }
});