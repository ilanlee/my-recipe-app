import spaghettiCarbonaraImage from '$lib/images/spaghettiCarbonara.png'
import ClassicTacosImage from '$lib/images/ClassicTacos.png'
import MaplePecanImage from '$lib/images/MaplePecan.png'

export const recipes = [
  {
    id: 1,
    name: {
      en: 'Spaghetti Carbonara',
      he: 'ספגטי קרבונרה'
    },
    imageURL: spaghettiCarbonaraImage,
    description: {
      en: 'A classic and delicious Italian pasta dish for 4 servings.',
      he: 'מנת פסטה איטלקית קלאסית וטעימה ל-4 סועדים.'
    },
    ingredients: [
      { name: { en: 'Spaghetti', he: 'ספגטי' }, quantity: 400, unit: 'g' },
      { name: { en: 'Large Egg Yolks', he: 'חלמונים גדולים' }, quantity: 4, unit: '' },
      { name: { en: 'Pancetta', he: 'פנצ\'טה' }, quantity: 150, unit: 'g' },
      { name: { en: 'Pecorino Romano Cheese', he: 'גבינת פקורינו רומנו' }, quantity: 50, unit: 'g' },
      { name: { en: 'Black Pepper', he: 'פלפל שחור' }, quantity: 1, unit: 'tsp' },
    ],
    instructions: {
      en: [
        'Cook spaghetti according to package directions.',
        'While pasta is cooking, cook pancetta in a large skillet over medium heat until crisp.',
        'In a bowl, whisk together egg yolks and Pecorino Romano cheese.',
        'Drain pasta, reserving some pasta water. Add pasta to the skillet with pancetta. Add egg mixture and toss to combine, adding pasta water if needed to create a creamy sauce.',
        'Season with black pepper and serve immediately.'
      ],
      he: [
        'בשלו את הספגטי לפי הוראות היצרן.',
        'בזמן שהפסטה מתבשלת, טגנו את הפנצ\'טה במחבת גדולה על אש בינונית עד שהיא פריכה.',
        'בקערה, טרפו יחד חלמונים וגבינת פקורינו רומנו.',
        'סננו את הפסטה, שמרו מעט ממי הבישול. הוסיפו את הפסטה למחבת עם הפנצ\'טה. הוסיפו את תערובת הביצים וערבבו לאיחוד, הוסיפו מי פסטה במידת הצורך ליצירת רוטב קרמי.',
        'תבלו בפלפל שחור והגישו מיד.'
      ]
    }
  },
  {
    id: 2,
    name: {
      en: 'Classic Tacos',
      he: 'טאקוס קלאסי' // Example, add actual translation
    },
    imageURL: ClassicTacosImage,
    description: {
      en: 'Classic ground beef tacos for a family of 4.',
      he: 'טאקוס בקר טחון קלאסי למשפחה של 4.' // Example, add actual translation
    },
    ingredients: [
        { name: { en: 'Ground Beef', he: 'בקר טחון' }, quantity: 1, unit: 'lb' },
        { name: { en: 'Taco Seasoning', he: 'תבלין לטאקו' }, quantity: 1, unit: 'oz' },
        { name: { en: 'Hard Taco Shells', he: 'קונכיות טאקו קשות' }, quantity: 12, unit: '' },
        { name: { en: 'Shredded Lettuce', he: 'חסה קצוצה' }, quantity: 2, unit: 'cups' },
        { name: { en: 'Diced Tomatoes', he: 'עגבניות קצוצות' }, quantity: 1, unit: 'cup' },
        { name: { en: 'Shredded Cheddar Cheese', he: 'גבינת צ\'דר מגוררת' }, quantity: 1, unit: 'cup' }
    ],
    instructions: { // Example, add actual translation for instructions
      en: [
        'In a large skillet, cook ground beef over medium-high heat until browned. Drain excess fat.',
        'Stir in taco seasoning and 1/4 cup of water. Bring to a simmer and cook for 5 minutes.',
        'Warm taco shells according to package directions.',
        'Serve beef in taco shells with lettuce, tomatoes, and cheese.'
      ],
      he: [
        'במחבת גדולה, טגנו בקר טחון על אש בינונית-גבוהה עד להשחמה. סננו עודפי שומן.',
        'הוסיפו תבלין טאקו ו-1/4 כוס מים. הביאו לרתיחה ובשלו 5 דקות.',
        'חממו את קונכיות הטאקו לפי הוראות האריזה.',
        'הגישו את הבקר בקונכיות הטאקו עם חסה, עגבניות וגבינה.'
      ]
    }
  },
    {
    id: 3,
    name: {
      en: 'Maple Pecan',
      he: 'מייפל פקאן' // Example, add actual translation
    },
    imageURL: MaplePecanImage,
    description: {
      en: 'Maple Pecan cake - sweet and airy',
      he: 'עוגת מייפל פקאן - מתוקה ואוורירית' // Example, add actual translation
    },
    ingredients: [
        { name: { en: 'Large Eggs', he: 'ביצים גדולות' }, quantity: 3, unit: '' },
        { name: { en: 'Sugar', he: 'סוכר' }, quantity: 1, unit: 'cup' }, // Corrected "Suger" to "Sugar"
        { name: { en: 'Vanilla Extract', he: 'תמצית וניל' }, quantity: 1, unit: 'TBSP' },
        { name: { en: 'Melted Butter', he: 'חמאה מומסת' }, quantity: 100, unit: 'grams' },
        { name: { en: 'Raising Flour', he: 'קמח תופח' }, quantity: 1.25, unit: 'cups' },
        { name: { en: 'Sour Cream', he: 'שמנת חמוצה' }, quantity: 200, unit: 'ml' },
        { name: { en: 'Pecan', he: 'פקאן' }, quantity: 1, unit: 'handfull' }, // Note: "handfull" is not a precise unit
        { name: { en: 'Maple Syrup', he: 'סירופ מייפל' }, quantity: 1, unit: 'cup' }
    ],
    instructions: { // Example, add actual translation for instructions
      en: [
        'In a bowl, whisk the 3 eggs.',
        'Switch to the paddle attachment on your mixer. Add the rest of the ingredients and mix well.',
        'Transfer the mixture to a baking pan (I use a ceramic pan, maybe size 26 cm).',
        'Arrange halved, unsweetened pecans on top of the mixture (as many as you like).',
        'Place in a preheated oven at 180°C (350°F).',
        'After 30 minutes, check with a toothpick, of course. Sometimes it needs a little more time...',
        'The cake will turn a beautiful golden brown.',
        'Once the cake is ready, take it out of the oven, prick it with the toothpick while it is still warm, and spread the maple syrup over the cake.',
      ],
      he: [
        'בקערה, טרפו את 3 הביצים.',
        'עברו לוו גיטרה במיקסר. הוסיפו את שאר המרכיבים וערבבו היטב.',
        'העבירו את התערובת לתבנית אפייה (אני משתמש בתבנית קרמית, בערך בגודל 26 ס"מ).',
        'סדרו חצאי פקאנים לא ממותקים מעל התערובת (כמה שתרצו).',
        'הכניסו לתנור שחומם מראש ל-180 מעלות צלזיוס.',
        'לאחר 30 דקות, בדקו עם קיסם, כמובן. לפעמים זה צריך עוד קצת זמן...',
        'העוגה תקבל צבע חום-זהוב יפה.',
        'כשהעוגה מוכנה, הוציאו אותה מהתנור, דקרו אותה עם קיסם כשהיא עוד חמה, ומרחו את סירופ המייפל על העוגה.'
      ]
    }
  }
  // Add more recipes here...
];