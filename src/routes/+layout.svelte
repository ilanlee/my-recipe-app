<script>
  import '../app.css'; // Import global stylesheet
</script>

<div class="app-container">
  <header>
    <a href="/" class="home-link">
      <h1>My Recipe Book</h1>
    </a>
    </header>

  <main>
    <slot />
  </main>

  <footer>
    <p>&copy; {new Date().getFullYear()} My Recipe Book. All rights reserved.</p>
  </footer>
</div>

<style>
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Make the container at least the full height of the viewport */
  }

  header {
    background-color: #2c3e50;
    padding: 1rem 2rem;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .home-link {
    color: white;
    text-decoration: none;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  main {
    flex-grow: 1; /* Allows the main content to grow and push the footer down */
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  footer {
    text-align: center;
    padding: 1.5rem;
    background-color: #f8f9fa;
    color: #6c757d;
    border-top: 1px solid #e7e7e7;
  }
</style>