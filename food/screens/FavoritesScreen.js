import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import {FavoritesContext} from '../store/favoritescontext'
import { FOODS } from '../data/dummy-data';
import FoodList from '../components/FoodList';

export default function FavoritesScreen() {
  const favoriteFoodContext = useContext(FavoritesContext);

  const favoriteFoods = FOODS.filter((food)=>favoriteFoodContext.ids.includes(food.id))
  if(favoriteFoods.length === 0){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
        You haven't added any food to your favorites...
        </Text>
      </View>
    )
  }
  return (
    <View>
      <FoodList items={favoriteFoods} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontWeight:'bold',
    fontSize:18,
  }
})