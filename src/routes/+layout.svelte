<script lang="ts">
  import '../app.css'; // Import global stylesheet
  import { currentLanguage, setLanguage } from '../stores.js';

  // 1. Define a type for Language
  type Language = 'en' | 'he';

  // 2. Define a type for individual UI strings that have translations
  interface UIString {
    en: string;
    he: string;
  }

  // 3. Define a type for the entire uiStrings object
  interface UIStrings {
    headerTitle: UIString;
    english: UIString;
    hebrew: UIString;
  }

  const uiStrings: UIStrings = {
    headerTitle: {
      en: "My Recipe Book",
      he: "ספר המתכונים שלי"
    },
    english: { en: "English", he: "English" }, // Button label
    hebrew: { en: "עברית", he: "עברית" }    // Button label
  };

  // Ensure currentLanguage is typed as Language
  // Note: Your store might already handle this, but it's good to be explicit.
  // If your store is written in TypeScript, make sure `currentLanguage` is of type Writable<Language>.
</script>

<div class="app-container">
  <header>
    <div class="header-content">
      <a href="/" class="home-link">
        <h1>{uiStrings.headerTitle[$currentLanguage as Language]}</h1>
      </a>
      <div class="lang-switcher">
        <button on:click={() => setLanguage('en')} class:active={$currentLanguage === 'en'}>{uiStrings.english[$currentLanguage as Language]}</button>
        <button on:click={() => setLanguage('he')} class:active={$currentLanguage === 'he'}>{uiStrings.hebrew[$currentLanguage as Language]}</button>
      </div>
    </div>
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

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px; /* Match main content max-width */
    margin: 0 auto; /* Center header content */
  }

  header {
    background-color: #2c3e50;
    padding: 1rem 1rem; /* Adjusted padding */
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex; /* Ensure header itself can center its content if needed */
    justify-content: center; /* Center .header-content if header is wider */
  }

  .lang-switcher button {
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 0.3rem 0.7rem;
    margin-left: 0.5rem;
    cursor: pointer;
    border-radius: 4px;
  }

  .home-link {
    color: white;
    text-decoration: none;
  }

  .lang-switcher button.active {
    background-color: white;
    color: #2c3e50;
  }

  header h1 { /* Scoped h1 to header */
    margin: 0;
    font-size: 1.5rem; /* Ensure this doesn't conflict with page h1 */
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