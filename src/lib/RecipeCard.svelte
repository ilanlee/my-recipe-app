<script lang="ts">
  import { currentLanguage } from '../stores.js'; // Adjust path if necessary, e.g., '../stores.ts'

  // Define types for localized strings and the recipe
  interface LocalizedString {
    en: string;
    he: string;
  }

  // Assuming 'Recipe' here is a simplified version for the card
  // For a full recipe type, you'd include ingredients and instructions as well.
  interface RecipeCardData {
    id: number; // Assuming an ID is present for navigation or keys
    name: LocalizedString;
    imageURL: string;
    description: LocalizedString;
  }

  export let recipe: RecipeCardData; // Type the incoming recipe prop

  // Assert currentLanguage as 'en' | 'he' for indexing
  type Language = 'en' | 'he';

  // Reactive declarations to get the localized name and description
  $: localizedName = recipe.name[$currentLanguage as Language];
  $: localizedDescription = recipe.description[$currentLanguage as Language];
</script>

<div
  class="recipe-card"
  class:rtl={$currentLanguage === 'he'}
  dir={$currentLanguage === 'he' ? 'rtl' : 'ltr'}
>
  <img src={recipe.imageURL} alt={localizedName} />
  <div class="card-content">
    <h3>{localizedName}</h3>
    <p>{localizedDescription}</p>
  </div>
</div>

<style>
  .recipe-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    margin: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    cursor: pointer;
  }
  .recipe-card:hover {
    transform: translateY(-5px);
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .card-content {
    padding: 1rem;
  }
  h3 {
    margin-top: 0;
  }

  /* RTL specific styles for the card */
  .recipe-card.rtl .card-content {
    text-align: right;
  }

  .recipe-card.rtl h3 {
    /* Add any specific RTL adjustments for the heading if needed */
  }
</style>