<script lang="ts">
  // This `data` prop is passed from our load function in +page.js
  export let data: { recipe: any };
  import { currentLanguage } from '../../../stores'; // Adjust path as necessary, potentially to ../stores.ts if you changed it

  const { recipe } = data;
  let portionMultiplier = 1; // 1 = 100%, 0.75 = 75%, etc.

  const portionOptions = [
    { label: '100%', value: 1 },
    { label: '75%', value: 0.75 },
    { label: '50%', value: 0.5 },
    { label: '25%', value: 0.25 },
  ];

  // Define a type for your recipe ingredients
  interface LocalizedString {
    en: string;
    he: string;
  }

  interface Ingredient {
    name: LocalizedString; // Changed to LocalizedString
    quantity: number;
    unit: LocalizedString | string; // Allow string for partial data updates, or make strictly LocalizedString
  }

  interface LocalizedStringArray {
    en: string[];
    he: string[];
  }

  interface Recipe {
    name: LocalizedString;
    description: LocalizedString;
    imageURL: string;
    ingredients: Ingredient[]; // Use the updated Ingredient type
    instructions: LocalizedStringArray;
  }

  // Cast the incoming recipe data to our Recipe type for better type checking
  const typedRecipe: Recipe = recipe;

  // Assert currentLanguage as 'en' | 'he' here
  type Language = 'en' | 'he';
  $: recipeName = typedRecipe.name[$currentLanguage as Language];
  $: recipeDescription = typedRecipe.description[$currentLanguage as Language];
  $: recipeInstructions = typedRecipe.instructions[$currentLanguage as Language];

  const uiStrings = {
    backToRecipes: { en: 'Back to Recipes', he: 'חזרה למתכונים' },
    ingredients: { en: 'Ingredients', he: 'רכיבים' },
    portionSize: { en: 'Portion Size:', he: 'גודל מנה:' },
    instructions: { en: 'Instructions', he: 'הוראות הכנה' },
  };

</script>

<div
  class="recipe-detail-container"
  class:rtl={$currentLanguage === 'he'}
  dir={$currentLanguage === 'he' ? 'rtl' : 'ltr'}
>
  <a href="/" class="back-link"
    >{$currentLanguage === 'he' ? '' : '\u00a0←'} {uiStrings.backToRecipes[$currentLanguage as Language]} {$currentLanguage === 'he' ? '→\u00a0' : ''}
  </a>
  <h1>{recipeName}</h1>
  <img src={typedRecipe.imageURL} alt={recipeName} />
  <p class="description">{recipeDescription}</p>

  <div class="ingredients-section">
    <h2>{uiStrings.ingredients[$currentLanguage as Language]}</h2>
    <div class="portion-controls">
      <span>{uiStrings.portionSize[$currentLanguage as Language]}</span>
      {#each portionOptions as option}
        <button
          class:active={portionMultiplier === option.value}
          on:click={() => portionMultiplier = option.value}
        >
          {option.label}
        </button>
      {/each}
    </div>

    <ul>
      {#each typedRecipe.ingredients as ingredient}
        {@const adjustedQuantity = ingredient.quantity * portionMultiplier}
        
        <li>
          {#if adjustedQuantity > 0}
            {parseFloat(adjustedQuantity.toPrecision(2))}
          {/if}

          {typeof ingredient.unit === 'object' ? ingredient.unit[$currentLanguage as Language] : ingredient.unit} {ingredient.name[$currentLanguage as Language]}
        </li>
      {/each}
    </ul>
  </div>

  <div class="instructions-section">
    <h2>{uiStrings.instructions[$currentLanguage as Language]}</h2>
    <ul>
      {#each recipeInstructions as step}
        <li>{step}</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .recipe-detail-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 1rem;
  }
  /* Removed: .recipe-detail-container.rtl {} as it was empty */

  img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 8px;
  }
  .description {
    font-style: italic;
    color: #555;
  }
  .back-link {
    display: block;
    margin-bottom: 1rem;
    color: #007bff;
    text-decoration: none;
  }
  .portion-controls {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .portion-controls button {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    background-color: #f7f7f7;
    cursor: pointer;
    border-radius: 5px;
  }
  .portion-controls button.active {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  }
  ul, ol {
    padding-left: 20px;
  }
  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  /* RTL specific adjustments for lists if necessary */
  .rtl ul, .rtl ol {
    padding-left: 0; /* Remove default left padding */
    padding-right: 20px; /* Add padding to the right for RTL */
  }

  /* Adjust arrow for back link in RTL */
/* Removed: .rtl .back-link {} as it was empty */

</style>