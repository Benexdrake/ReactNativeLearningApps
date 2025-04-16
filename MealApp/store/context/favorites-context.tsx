import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [] as string[],
    addFavorite: (id:string) => {},
    removeFavorite: (id:string) => {}
});

const FavoritesContextProvider = ({children}:any) =>
{
    const [favoritesMealIds, setFavoritesMealIds] = useState<string[]>([])

    const addFavorite = (id:string) =>
    {
        setFavoritesMealIds((current) => [...current, id]);
    }

    const removeFavorite = (id:string) =>
    {
        setFavoritesMealIds((current) => current.filter((mealId) => mealId !== id));
    }

    const value= {
        ids: favoritesMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;