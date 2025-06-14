import spaghettiCarbonaraImage from '$lib/images/spaghettiCarbonara.png'
import ClassicTacosImage from '$lib/images/ClassicTacos.png'
import MaplePecanImage from '$lib/images/MaplePecan.png'

export const recipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    imageURL: spaghettiCarbonaraImage,
    description: 'A classic and delicious Italian pasta dish for 4 servings.',
    // New structure for ingredients
    ingredients: [
      { name: 'Spaghetti', quantity: 400, unit: 'g' },
      { name: 'Large Egg Yolks', quantity: 4, unit: '' },
      { name: 'Pancetta', quantity: 150, unit: 'g' },
      { name: 'Pecorino Romano Cheese', quantity: 50, unit: 'g' },
      { name: 'Black Pepper', quantity: 1, unit: 'tsp' },
    ],
    instructions: [
      'Cook spaghetti according to package directions.',
      'While pasta is cooking, cook pancetta in a large skillet over medium heat until crisp.',
      'In a bowl, whisk together egg yolks and Pecorino Romano cheese.',
      'Drain pasta, reserving some pasta water. Add pasta to the skillet with pancetta. Add egg mixture and toss to combine, adding pasta water if needed to create a creamy sauce.',
      'Season with black pepper and serve immediately.'
    ]
  },
  {
    id: 2,
    name: 'Classic Tacos',
    imageURL: ClassicTacosImage,
    description: 'Classic ground beef tacos for a family of 4.',
    ingredients: [
        { name: 'Ground Beef', quantity: 1, unit: 'lb' },
        { name: 'Taco Seasoning', quantity: 1, unit: 'oz' },
        { name: 'Hard Taco Shells', quantity: 12, unit: '' },
        { name: 'Shredded Lettuce', quantity: 2, unit: 'cups' },
        { name: 'Diced Tomatoes', quantity: 1, unit: 'cup' },
        { name: 'Shredded Cheddar Cheese', quantity: 1, unit: 'cup' }
    ],
    instructions: [
        'In a large skillet, cook ground beef over medium-high heat until browned. Drain excess fat.',
        'Stir in taco seasoning and 1/4 cup of water. Bring to a simmer and cook for 5 minutes.',
        'Warm taco shells according to package directions.',
        'Serve beef in taco shells with lettuce, tomatoes, and cheese.'
    ]
  },
    {
    id: 3,
    name: 'Maple Pecan',
    imageURL: MaplePecanImage,
    description: 'Classic ground beef tacos for a family of 4.',
    ingredients: [
        { name: 'Large Eggs', quantity: 3, unit: '' },
        { name: 'Suger', quantity: 1, unit: 'cup' },
        { name: 'Vanilla Extract', quantity: 1, unit: 'TBSP' },
        { name: 'Melted Butter', quantity: 100, unit: 'grams' },
        { name: 'Raising Flour', quantity: 1.25, unit: 'cups' },
        { name: 'Sour Cream', quantity: 200, unit: 'ml' },
        { name: 'Pecan', quantity: 1, unit: 'handfull' },
        { name: 'Maple Syrup', quantity: 1, unit: 'cup' }
    ],
    instructions: [
        'In a bowl, whisk the 3 eggs.',
        'Switch to the paddle attachment on your mixer. Add the rest of the ingredients and mix well.',
        'Transfer the mixture to a baking pan (I use a ceramic pan, maybe size 26 cm).',
        'Arrange halved, unsweetened pecans on top of the mixture (as many as you like).',
        'Place in a preheated oven at 180°C (350°F).',
        'After 30 minutes, check with a toothpick, of course. Sometimes it needs a little more time...',
        'The cake will turn a beautiful golden brown.',
        'Once the cake is ready, take it out of the oven, prick it with the toothpick while it is still warm, and spread the maple syrup over the cake.',
    ]
  }
  // Add more recipes here...
];