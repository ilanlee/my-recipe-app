<script>
  export let recipe;
</script>

<div class="recipe-card">
  <img src={recipe.imageURL} alt={recipe.name} />
  <div class="card-content">
    <h3>{recipe.name}</h3>
    <p>{recipe.description}</p>
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
</style>