import spaghettiCarbonaraImage from '$lib/images/spaghettiCarbonara.png'
import ClassicTacosImage from '$lib/images/ClassicTacos.png'
import MaplePecanImage from '$lib/images/MaplePecan.png'
import OrasChesscakeImage from '$lib/images/OrasChesscake.png'


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
      { name: { en: 'Spaghetti', he: 'ספגטי' }, quantity: 400, unit: { en: 'grams', he: 'גרמים' } },
      { name: { en: 'Large Egg Yolks', he: 'חלמונים גדולים' }, quantity: 4, unit: { en: '', he: ''} },
      { name: { en: 'Pancetta', he: 'פנצ\'טה' }, quantity: 150, unit:{ en: 'grams', he: 'גרמים' } },
      { name: { en: 'Pecorino Romano Cheese', he: 'גבינת פקורינו רומנו' }, quantity: 50, unit: { en: 'grams', he:'גרמים'} },
      { name: { en: 'Black Pepper', he: 'פלפל שחור' }, quantity: 1, unit: {en: 'tsp', he:'כפיות'} },
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
        { name: { en: 'Ground Beef', he: 'בקר טחון' }, quantity: 1, unit: { en: 'lb', he: 'ליברה' } },
        { name: { en: 'Taco Seasoning', he: 'תבלין לטאקו' }, quantity: 1, unit: { en: 'oz', he: 'אונקיה' } },
        { name: { en: 'Hard Taco Shells', he: 'קונכיות טאקו קשות' }, quantity: 12, unit: { en: '', he: '' } },
        { name: { en: 'Shredded Lettuce', he: 'חסה קצוצה' }, quantity: 2, unit: { en: 'cups', he: 'כוסות' } },
        { name: { en: 'Diced Tomatoes', he: 'עגבניות קצוצות' }, quantity: 1, unit: { en: 'cup', he: 'כוס' } },
        { name: { en: 'Shredded Cheddar Cheese', he: 'גבינת צ\'דר מגוררת' }, quantity: 1, unit: { en: 'cup', he: 'כוס' } }
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
        { name: { en: 'Large Eggs', he: 'ביצים גדולות' }, quantity: 3, unit: { en: '', he: '' } },
        { name: { en: 'Sugar', he: 'סוכר' }, quantity: 1, unit: { en: 'cup', he: 'כוס' } },
        { name: { en: 'Vanilla Extract', he: 'תמצית וניל' }, quantity: 1, unit: { en: 'TBSP', he: 'כף' } },
        { name: { en: 'Melted Butter', he: 'חמאה מומסת' }, quantity: 100, unit: { en: 'grams', he: 'גרם' } },
        { name: { en: 'Raising Flour', he: 'קמח תופח' }, quantity: 1.25, unit: { en: 'cups', he: 'כוסות' } },
        { name: { en: 'Sour Cream', he: 'שמנת חמוצה' }, quantity: 200, unit: { en: 'ml', he: 'מ"ל' } },
        { name: { en: 'Pecan', he: 'פקאן' }, quantity: 1, unit: { en: 'handful', he: 'חופן' } }, // Corrected "handfull" and translated
        { name: { en: 'Maple Syrup', he: 'סירופ מייפל' }, quantity: 1, unit: { en: 'cup', he: 'כוס' } }
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
  },
  {
    id: 4,
    name: {
      en: "Ora's Cheesecake",
      he: 'עוגת גבינה של אורה'
    },
    imageURL: OrasChesscakeImage,
    description: {
      en: "Ora's Cheesecake - perfectly balanced with airy texture", // Corrected escaping and typo
      he: 'עוגת הגבינה של אורה - מאוזנת ומאווררת'
    },
    ingredients: [
        { "name": { "en": "Eggs", "he": "ביצים" }, "quantity": 5, "unit": { "en": "", "he": "" } },
        { "name": { "en": "Vanilla Sugar", "he": "סוכר וניל" }, "quantity": 1, "unit": { "en": "", "he": "" } },
        { "name": { "en": "White Cheese 9%", "he": "גבינה לבנה 9%" }, "quantity": 500, "unit": { "en": "grams", "he": "גרם" } },
        { "name": { "en": "Baking Powder", "he": "אבקת אפייה" }, "quantity": 0.25, "unit": { "en": "tsp", "he": "כפית" } },
        { "name": { "en": "Salt", "he": "מלח" }, "quantity": 1, "unit": { "en": "pinch", "he": "קורט" } },
        { "name": { "en": "Lemon Zest", "he": "גרד קליפת לימון" }, "quantity": 1, "unit": { "en": "", "he": "" } },
        { "name": { "en": "Sweet Cream", "he": "שמנת מתוקה" }, "quantity": 250, "unit": { "en": "grams", "he": "גרם" } }
    ],
    instructions: {
      en: [
        'Separate the 5 eggs into yolks and whites. Whip the egg whites, gradually adding 1 cup of sugar. Continue whipping until the meringue is stiff and stable.',
		    'In a separate bowl, mix: 5 egg yolks 1 packet vanilla sugar (or 1 teaspoon liquid vanilla extract) 500g 9% white cheese 3 tablespoons self-rising flour (If you don\'t have self-rising flour, use a quarter teaspoon of baking powder and a pinch of salt.)',
		    'Mix all these ingredients well, then: Gently fold this mixture into the whipped egg whites, being careful not to break down the foam. It\'s okay if some lumps of egg white remain. If using a mixer, you can mix on a very slow speed. The texture should be combined, but with peaks.',
		    'Preheat the oven to 180 degrees Celsius (350°F). Grease a 26 cm (10-inch) springform pan. Pour the mixture into the pan and bake for 30-40 minutes, or until done – it should have a nice brown top, and a skewer inserted into the cake should come out dry. Let the cake cool in the oven with the door half-open (or remove it from the oven). As the cake cools, the center will sink slightly.',
		    'Whip 250g of sweet cream (heavy cream) with 2 tablespoons of sugar. Spread this over the cake after it has cooled.',

      ],
      he: [
		    'להפריד את 5 הביצים לחלמונים וחלבונים.',
		    'את החלבונים להקציף ולהוסיף לאט 1 כוס סוכר.',
		    'להקציף עד שהקצף חזק ויציב.',
		    'בקערה נפרדת, לערבב:',
		    '5 חלמונים',
		    '1 סוכר וניל (או כפית וניל נוזלי)',
		    '500 גרם גבינה לבנה 9%',
		    '3 כפות קמח תופח',
		    '(אם אין קמח תופח – רבע כפית אבקת אפיה וקורט מלח)',
		    'את כל החומרים לערבב היטב ואז:',
		    'להוסיף לקערת החלבונים המוקצפים ולערבב מאוד מעדינות, שהקצף לא יישבר – יישארו גושי חלבון וזה בסדר.',
		    'במיקסר אפשר לערבב במהירות מאוד איטית.',
		    'המרקם צריך להיות מעורבב, אבל עם גבעות.',
		    'לחמם תנור ל-180 מעלות.',
		    'לשמן תבנית קפיצית מס. 26.',
		    'לצקת את התערובת לתבנית ולאפות 30-40 דקות, או עד שמוכן – מקבל גוון חום יפה למעלה, הקיסם צריך לצאת יבש מהעוגה.',
		    'לתת לעוגה להתקרר בתנור כשהדלת חצי פתוחה (או להוציא מהתנור).',
		    'כשהעוגה מתקררת החלק הפנימה צונח מעט.',
		    'להקציף 250 גרם שמנת מתוקה עם 2 כפות סוכר.',
		    'למרוח מעל העוגה לאחר קירור.',
      ]
    }
  }
  // Add more recipes here...
];