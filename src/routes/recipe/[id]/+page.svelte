<script>
  // This `data` prop is passed from our load function in +page.js
  export let data;

  const { recipe } = data;
  let portionMultiplier = 1; // 1 = 100%, 0.75 = 75%, etc.

  const portionOptions = [
    { label: '100%', value: 1 },
    { label: '75%', value: 0.75 },
    { label: '50%', value: 0.5 },
    { label: '25%', value: 0.25 },
  ];
</script>

<div class="recipe-detail-container">
  <a href="/" class="back-link">&larr; Back to Recipes</a>
  <h1>{recipe.name}</h1>
  <img src={recipe.imageURL} alt={recipe.name} />
  <p class="description">{recipe.description}</p>

  <div class="ingredients-section">
    <h2>Ingredients</h2>
    <div class="portion-controls">
      <span>Portion Size:</span>
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
      {#each recipe.ingredients as ingredient}
        {@const adjustedQuantity = ingredient.quantity * portionMultiplier}
        
        <li>
          {#if adjustedQuantity > 0}
            {parseFloat(adjustedQuantity.toPrecision(2))}
          {/if}

          {ingredient.unit} {ingredient.name}
        </li>
      {/each}
    </ul>
  </div>

  <div class="instructions-section">
    <h2>Instructions</h2>
    <ol>
      {#each recipe.instructions as step}
        <li>{step}</li>
      {/each}
    </ol>
  </div>
</div>

<style>
  .recipe-detail-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 1rem;
  }
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
</style>