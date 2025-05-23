import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "../MealDetails";

export default function MealItem({id, title, imageUrl, duration, complexity, affordability}:any)
{
    const navigation = useNavigation<any>();

    const selectMealItemHandler = () =>
    {
        navigation.navigate('MealDetail', {id:id, title:title})
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'#ccc'}} style={({pressed}) => pressed ? styles.buttonPressed : null} onPress={selectMealItemHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin:16,
        borderRadius: 8,
        backgroundColor:'white',
        elevation:4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius:8,
        overflow:'hidden'
    },
    buttonPressed: {
        opacity: 0.5
      },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8
    }
})