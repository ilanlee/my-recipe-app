// stores.ts
import { writable } from 'svelte/store';

type Language = 'en' | 'he'; // Define this type in your store as well

// Initialize with a default language, e.g., from localStorage or 'en'
const browserLanguage = typeof window !== 'undefined' ? (navigator.language.startsWith('he') ? 'he' : 'en') : 'en';

export const currentLanguage = writable<Language>(browserLanguage);

export function setLanguage(lang: Language) {
  currentLanguage.set(lang);
}