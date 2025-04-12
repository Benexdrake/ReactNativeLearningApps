import { StyleSheet, View } from "react-native";
import Colors from '../../constants/colors'
export default function Card({children}:any)
{
    return <View style={styles.inputContainer}>{children}</View>
}

const styles = StyleSheet.create(
{
    inputContainer: {
        justifyContent:'center',
        alignItems:'center',
        marginTop:36,
        marginHorizontal:24,
        padding:16,
        backgroundColor: Colors.primary800,
        borderRadius:6,
        elevation: 4, // For Android
        shadowColor: 'black', // For Android and IOS
        shadowOffset: {width: 0, height: 2}, // For IOS
        shadowRadius: 6, // For IOS
        shadowOpacity: 0.25 // For IOS
    }
})