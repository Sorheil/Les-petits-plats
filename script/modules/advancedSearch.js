import { advancedFilters } from "./handleKeyword.js";

export function advancedSearchField(recipes) {
    const filteredRecipes = recipes.filter(recipe => {
        let allIngredientsIncluded = advancedFilters.ingredients.every(filterIngredient =>
            recipe.ingredients.some(ingredient =>
                ingredient.ingredient.toLowerCase().includes(filterIngredient.toLowerCase())
            )
        );

        let applianceIncluded = advancedFilters.appliances.length === 0 ||
            advancedFilters.appliances.every(filterAppliance =>
                recipe.appliance.toLowerCase().includes(filterAppliance.toLowerCase())
            );

        let allUstensilsIncluded = advancedFilters.ustensils.every(filterUstensil =>
            recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(filterUstensil.toLowerCase()))
        );

        return allIngredientsIncluded && applianceIncluded && allUstensilsIncluded;
    });

    return filteredRecipes;
}
