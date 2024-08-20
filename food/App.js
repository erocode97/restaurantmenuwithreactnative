import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './screens/FoodOverviewScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FavoritesContextProvider from './store/favoritescontext';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
 
function DraweNavigator(){
  return(
    <Drawer.Navigator screenOptions={{headerStyle:{backgroundColor:'blue'},headerTintColor:'white'}}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{title:'All Categories',drawerIcon:()=>(<Entypo name="list" size={24} color="black" />
)}} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{title:'Favorites',drawerIcon:()=><AntDesign name="star" size={24} color="black" />
}}/>
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <FavoritesContextProvider>
       <Stack.Navigator  screenOptions={{headerStyle: {backgroundColor:'blue'},headerTintColor:'white', contentStyle:{backgroundColor:'lightblue'}}}>
        <Stack.Screen name="Drawer" component={DraweNavigator} options={{headerShown:false,}} />
        <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
        <Stack.Screen name="FoodDetail" options={{title: 'Content'}} component={FoodDetailScreen} />
       </Stack.Navigator>
      </FavoritesContextProvider>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
