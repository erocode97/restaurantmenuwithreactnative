import Category from '../models/category';
import Food from '../models/food';

export const CATEGORIES = [
  new Category('c1', 'Italian', 'pink'),
  new Category('c2', 'Aperitif', 'darkpink'),
  new Category('c3', 'Hamburger', 'brown'),
  new Category('c4', 'Deutsch', 'yellow'),
  new Category('c5', 'Diet', 'blue'),
  new Category('c6', 'Egzotic', 'green'),
  new Category('c7', 'Breakfast', 'lightblue'),
  new Category('c8', 'Indian', 'lightgreen'),
];

export const FOODS = [
  new Food(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'Budget Friendly',
    'Normal Calorie',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    [
      '4  Tomatoes',
      '1 Teaspoon Olive Oil',
      '2 Onion',
      '200g Spaghetti',
      'Spices',
      'Cheese',
    ]
  ),
  new Food(
    'm2',
    ['c2'],
    'Toast',
    'Budget Friendly',
    'High Calorie',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    ['Half Bread', 'Sausage', 'Salami', 'Cheddar Cheese', 'Margarine']
  ),
  new Food(
    'm3',
    ['c3'],
    'Hamburger',
    'Budget Friendly',
    'High Calorie',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    [
      '150 gr Meat',
      '2 Slices of Tomato',
      '1 Slice Cheddar Cheese',
      '1 Slice Onion',
      'Ketchup',
      'Mayonnaise',
    ]
  ),
  new Food(
    'm4',
    ['c4'],
    'Sautéed chicken',
    'Budget Friendly',
    'Normal Calorie',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    [
      '200 gr Chicken',
      'Tomato',
      'Pepper',
      'Basil',
      'Lemon',
      'Olive Oil',
      'Salt',
    ]
  ),
  new Food(
    'm5',
    ['c2', 'c5'],
    'Fish Salad',
    'Expensive',
    'Less Calorie',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    [
      'Salmon',
      'Tomato',
      'Lemon',
      'Salad Sauce',
      'Green Onion',
      'Mustard',
      'Olive Oil',
      'Salt',
    ]
  ),
  new Food(
    'm6',
    ['c6'],
    'Orange Pudding',
    'Budget Friendly',
    'High Calorie',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    [
      'Orange Juice',
      '200gr Sugar',
      '100gr Yoghurt',
      '200g Whipped Cream',
      'Orange Slices',
    ]
  ),
  new Food(
    'm7',
    ['c7'],
    'Pancake',
    'Budget Friendly',
    'Less Calorie',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    [
      '3 Tablespoons of Flour',
      '1 Teaspoon of Salt',
      '1 Teaspoon of Sugar',
      '2 Glasses Milk',
      '2 Eggs',
      '2 Tablespoons of Oil',
    ]
  ),
  new Food(
    'm8',
    ['c8'],
    'Chicken Indian Food',
    'Budget Friendly',
    'Normal Calorie',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    [
      '6 Chicken Thighs',
      '2 Onions',
      '4 Cloves of Garlic',
      '1 Teaspoon Turmeric',
      '1 Liter Milk',
      'Half Liter Whipped Cream',
      'Salt',
    ]
  ),

  new Food(
    'm10',
    ['c2', 'c5'],
    'Strawberry Summer Salad',
    'Budget Friendly',
    'Less Calorie',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    ['Strawberry', 'Tomato', 'Cucumber', 'Salt', 'Salad Sauce', 'Olive Oil']
  ),
];
