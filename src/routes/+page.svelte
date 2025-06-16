<script>
  import RecipeCard from '$lib/RecipeCard.svelte';
  import { recipes } from '../data.js';
  import { currentLanguage } from '../stores';

  let searchTerm = '';

  const uiStrings = {
    pageTitle: {
      en: "Recipes",
      he: "מתכונים"
    },
    searchPlaceholder: {
      en: "Search for a recipe...",
      he: "חפש מתכון..."
    }
  };

  // Reactive declaration: This will re-run whenever `searchTerm` changes.
  $: filteredRecipes = recipes.filter(recipe => {
    const recipeNameInCurrentLang = recipe.name[$currentLanguage] || recipe.name['en']; // Fallback to English
    return recipeNameInCurrentLang.toLowerCase().includes(searchTerm.toLowerCase());
  }
  );
</script>

<main>
  <h1>{uiStrings.pageTitle[$currentLanguage]}</h1>

  <div class="search-container">
    <input
      type="text"
      bind:value={searchTerm}
      placeholder={uiStrings.searchPlaceholder[$currentLanguage]}
    />
  </div>

  <div class="recipe-grid">
    {#each filteredRecipes as recipe (recipe.id)}
      <a href="/recipe/{recipe.id}" class="recipe-link">
        <RecipeCard {recipe} />
      </a>
    {/each}
  </div>
</main>

<style>
  main {
    padding: 1rem;
    /* max-width is now handled by +layout.svelte for the main tag */
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    color: #333;
  }
  .search-container {
    text-align: center;
    margin: 2rem 0;
  }
  input {
    width: 50%;
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
  .recipe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    
  }
  .recipe-link {
    text-decoration: none;
    color: inherit;
  }
</style>