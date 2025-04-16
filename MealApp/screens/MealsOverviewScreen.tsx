import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

export default function MealOverviewScreen({route, navigation}:any)
{
    const {categoryId} = route.params;

    const displayedMeals = MEALS.filter((mealItem:any) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    return <MealsList items={displayedMeals}/>
}

