import spaghettiCarbonaraImage from '$lib/images/SpaghettiCarbonara.png';

export const recipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    imageURL: '$lib/images/SpaghettiCarbonara.png',
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
    imageURL: 'https://assets.bonappetit.com/photos/5a7de2023a4b3734e043138b/16:9/w_2560%2Cc_limit/tacos-al-pastor.jpg',
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
  }
  // Add more recipes here...
];