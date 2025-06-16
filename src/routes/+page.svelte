<script>
  import RecipeCard from '$lib/RecipeCard.svelte';
  import { recipes } from '../data.js';

  let searchTerm = '';

  // Reactive declaration: This will re-run whenever `searchTerm` changes.
  $: filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
</script>

<main>
  <h1>Svelte Recipes</h1>

  <div class="search-container">
    <input
      type="text"
      bind:value={searchTerm}
      placeholder="Search for a recipe..."
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
    max-width: 1200px;
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