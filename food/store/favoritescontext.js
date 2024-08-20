import { createContext,useState } from "react";

export const FavoritesContext = createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{},
})

function FavoritesContextProvider({children}){
const [favoriteFoodIds, setFavoriteFoodsIds] = useState([])

function addFavorite(id){
    setFavoriteFoodsIds((current)=>[...current,id])
}
function removeFavorite(id){
    setFavoriteFoodsIds((current)=>current.filter((foodId) => foodId !== id))
}
const value = {
    ids:favoriteFoodIds,
    addFavorite:addFavorite,
    removeFavorite:removeFavorite,
}

    return <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>

}

export default FavoritesContextProvider;