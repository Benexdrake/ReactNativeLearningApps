import { StyleSheet, Text } from "react-native"

export default function Title({children}:any)
{
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontFamily:'open-sans-bold',
        fontSize:24,
        color: 'white',
        textAlign:'center',
        borderWidth: 2,
        borderColor: 'white',
        padding:12
    }
})