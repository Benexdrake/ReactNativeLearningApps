import { FlatList, FlatListComponent } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const renderCategoryItem = (itemData:any) =>
{
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
}

export default function CategoriesScreen()
{

    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem}/>
    )
}