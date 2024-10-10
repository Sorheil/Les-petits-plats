export let listkeyWords = {
    ingredients: [],
    appliances: [],
    utensils: []
}
export function generateLists(recipes) {
    // Extract all the ingredient names from each recipe
    let ingredientNameLists = [];
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            ingredientNameLists.push(ingredient.ingredient.toLowerCase());
        });
    });
    // Create a set of unique ingredients
    const uniqueIngredientsNames = Array.from(new Set(ingredientNameLists));

    // Extract all the appliances names from each recipe
    const uniqueAppliancesNames = Array.from(
        new Set(
            recipes.map(recipe => recipe.appliance.toLowerCase())
        )
    );

    // Extract all the ustensils names from each recipe
    let ustensiltNameLists = [];
    recipes.forEach(recipe => {
        recipe.ustensils.forEach(ustensil => {
            ustensiltNameLists.push(ustensil.toLowerCase())
        })
    })
    const uniqueUstensilsNames = Array.from(new Set(ustensiltNameLists));
    //update listkeywords
    listkeyWords = {
        ingredients: uniqueIngredientsNames,
        appliances: uniqueAppliancesNames,
        utensils: uniqueUstensilsNames
    }

    // retunr an objet contains uniques lists
    return {
        ingredients: uniqueIngredientsNames,
        appliances: uniqueAppliancesNames,
        utensils: uniqueUstensilsNames
    };
}

export function updateAdvancedSearchField(recipes) {
    // Generate the lists of ingredients, appliances, and utensils
    const { ingredients, appliances, utensils } = generateLists(recipes);

    // update list of ingredients
    const ingredientHTMLlist = document.querySelector('.dropdown__content[data-type="ingredient"] ul');
    ingredientHTMLlist.innerHTML = '';
    const ingredientItemsHTML = ingredients.map(itemValue => `<li>${itemValue}</li>`).join('');
    ingredientHTMLlist.innerHTML = ingredientItemsHTML;

    // update list of appliances
    const applianceHTMLlist = document.querySelector('.dropdown__content[data-type="appliance"] ul');
    applianceHTMLlist.innerHTML = ''; 
    const applianceItemsHTML = appliances.map(itemValue => `<li>${itemValue}</li>`).join('');
    applianceHTMLlist.innerHTML = applianceItemsHTML;

    // update list of ustensils 
    const utensilHTMLlist = document.querySelector('.dropdown__content[data-type="ustensil"] ul');
    utensilHTMLlist.innerHTML = '';
    const utensilItemsHTML = utensils.map(itemValue => `<li>${itemValue}</li>`).join('');
    utensilHTMLlist.innerHTML = utensilItemsHTML;
}
