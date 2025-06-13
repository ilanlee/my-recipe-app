import { recipes } from '../../../data.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  // Converts params.id to a number before a strict comparison
const recipe = recipes.find((r) => r.id === parseInt(params.id));

  if (!recipe) {
    throw error(404, 'Recipe not found');
  }

  return {
    recipe
  };
}