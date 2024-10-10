export default function createRecipe(recipeData) {
    // Création d'un élément div pour la recette
    const recipeElement = document.createElement('div');
    recipeElement.classList.add('recipe');

    // Création du contenu HTML de la recette
    recipeElement.innerHTML = `
        <div class="recipe__img"></div>
        <div class="recipe__content">
            <h2 class="recipe__title">
                ${recipeData.name} 
                <span class="recipe__time">
                    <i class="fa-regular fa-clock"></i> ${recipeData.time} min
                </span>
            </h2>
            <ul class="recipe__ingredients">
                ${recipeData.ingredients.map(ingredient => `
                    <li class="ingredient">
                        ${ingredient.ingredient}: 
                        <span class="ingredient__quantity">
                            ${ingredient.quantity || ''} ${ingredient.unit || ''}
                        </span>
                    </li>
                `).join('')}
            </ul>
            <p class="recipe__description">${recipeData.description}</p>
        </div>
    `;

    return recipeElement;
}
