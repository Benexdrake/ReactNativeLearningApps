import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

export default function MealDetailScreen({route, navigation}:any)
{
    const favoritesMealCtx = useContext(FavoritesContext);

    const id = route.params.id;

    const selectedMeal = MEALS.find((meal) => meal.id === id)

    const mealIsFavorite = favoritesMealCtx.ids.includes(id);

    const changeFavoritesStatusHandler = () =>
    {
        if(mealIsFavorite)
            favoritesMealCtx.removeFavorite(id);
        else
            favoritesMealCtx.addFavorite(id);
    }

    useLayoutEffect(() =>
    {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={changeFavoritesStatusHandler} icon={mealIsFavorite ? 'star' : 'star-outline'} color={'white'}/>
            }
        })

    }, [navigation, changeFavoritesStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri:selectedMeal?.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal?.title}</Text>
            <MealDetails 
                duration={selectedMeal?.duration} 
                complexity={selectedMeal?.complexity} 
                affordability={selectedMeal?.affordability}
                textStyle={styles.detailText}/>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={selectedMeal?.ingredients}/>
                    <SubTitle>Steps</SubTitle>
                    <List data={selectedMeal?.steps}/>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width:'100%',
        height:350
    },
    title: {
        fontWeight: 'bold',
        fontSize:24,
        margin: 8,
        textAlign:'center',
        color:'white'
    },
    detailText: {
        color:'white'
    },
    listOuterContainer: {
        alignItems:'center'
    },
    listContainer: {
        width: '80%'
    }
})