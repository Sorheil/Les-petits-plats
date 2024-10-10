
/**
 * This is version 1 of the search algorithm, the one using native loops.
 * Search function that filters recipes based on the userinput
 * @param {string} query - The search string entered by the user
 * @param {Array} recipes - The array recipes fetch from database
 * @param {Object} advancedFilters - Keywords in ingredients, utensils or appliances.
 * @returns {Array} - Array of recipes that match the search
 */
import { advancedSearchField } from "./advancedSearch.js";

export default function searchRecipes(query, recipes) {

    if (query.length >= 3) {

        let filteredRecipes = [];

        for (let i = 0; i < recipes.length; i++) {
            let recipe = recipes[i];
            let titleMatches = recipe.name.toLowerCase().includes(query.toLowerCase());

            if (titleMatches) {
                filteredRecipes.push(recipe);
                continue;
            }

            let ingredientMatches = false;
            for (let j = 0; j < recipe.ingredients.length; j++) {
                let ingredient = recipe.ingredients[j].ingredient.toLowerCase();
                if (ingredient.includes(query.toLowerCase())) {
                    ingredientMatches = true;
                    break;
                }
            }

            if (ingredientMatches) {
                filteredRecipes.push(recipe);
                continue;
            }

            let descriptionMatches = recipe.description.toLowerCase().includes(query.toLowerCase());
            if (descriptionMatches) {
                filteredRecipes.push(recipe);
            }
        }

        return advancedSearchField(filteredRecipes);

    } else {
        return advancedSearchField(recipes);
    }

}
