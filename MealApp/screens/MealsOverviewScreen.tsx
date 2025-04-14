import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect } from "react";

export default function MealOverviewScreen({route, navigation}:any)
{
    const {categoryId} = route.params;

    const displayedMeals = MEALS.filter((mealItem:any) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    const renderMealItem = (itemData:any) =>
    {
        return <MealItem 
                    id={itemData.item.id}
                    title={itemData.item.title} 
                    imageUrl={itemData.item.imageUrl}
                    duration={itemData.item.duration}
                    complexity={itemData.item.complexity}
                    affordability={itemData.item.affordability}/>
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:16
    }
})