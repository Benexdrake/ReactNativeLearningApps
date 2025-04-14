import { FlatList, FlatListComponent, StyleSheet, View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'


export default function CategoriesScreen({navigation}:any)
{
    const renderCategoryItem = (itemData:any) =>
    {
        const pressHandler = () =>
        {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
                title: itemData.item.title
            });
        }
    
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
    }

    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2}/>
    )
}