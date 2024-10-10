import createRecipe from "../components/recipe.js";

const sectionRecipes = document.querySelector('.recipes');

export default function displayRecipes(recipes) {
    sectionRecipes.innerHTML = '';

    if (!recipes || recipes.length === 0) {
        sectionRecipes.innerHTML = '<div class="no-recipes"> <p> « Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes » ,« poisson », etc. </p></div>';
    } else {
        recipes.forEach(recipe => {
            let recipeComponent = createRecipe(recipe);
            sectionRecipes.appendChild(recipeComponent);
        });
    }
}
