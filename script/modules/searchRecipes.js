
/**
 * Search function that filters recipes based on the userinput
 * @param {string} query - The search string entered by the user
 * @param {Array} recipes - The array recipes fetch from database
 * @param {Object} advancedFilters - Keywords in ingredients, utensils or appliances.
 * @returns {Array} - Array of recipes that match the search
 */
import { advancedSearchField } from "./advancedSearch.js";

export default function searchRecipes(query, recipes) {

    if (query.length >= 3) {

        let filteredRecipes = recipes.filter(recipe => {
            const titleMatches = recipe.name.toLowerCase().includes(query.toLowerCase());
            if (titleMatches) {
                return true
            }

            const ingredientMatches = recipe.ingredients.some(ingredientObj =>
                ingredientObj.ingredient.toLowerCase().includes(query.toLowerCase())
            );
            if (ingredientMatches) {
                return true
            }

            const descriptionMatches = recipe.description.toLowerCase().includes(query.toLowerCase());
            if (descriptionMatches) {
                return true
            }
            return false

        });

        return advancedSearchField(filteredRecipes);

    } else {
        return advancedSearchField(recipes);
    }


}

