
export let advancedFilters = {
    ingredients: [],
    ustensils: [],
    appliances: []

}
export function addKeyword(keyword, typeKeyword) {
    let alreadyExists = false;

    switch (typeKeyword) {
        case 'ingredient':
            if (!advancedFilters.ingredients.includes(keyword)) {
                advancedFilters.ingredients.push(keyword);
            } else {
                alreadyExists = true;
            }
            break;

        case 'appliance':
            if (!advancedFilters.appliances.includes(keyword)) {
                advancedFilters.appliances.push(keyword);
            } else {
                alreadyExists = true;
            }
            break;

        case 'ustensil':
            if (!advancedFilters.ustensils.includes(keyword)) {
                advancedFilters.ustensils.push(keyword);
            } else {
                alreadyExists = true;
            }
            break;
    }

    if (!alreadyExists) {
        const tagsContainer = document.querySelector('.tags-container');

        const tagButton = document.createElement('button');
        tagButton.classList.add('btn', 'px-4', 'tag');
        tagButton.setAttribute('data-type', typeKeyword);
        tagButton.innerHTML = `${keyword} <span><i class="fa-regular fa-circle-xmark"></i></span>`;

        tagsContainer.appendChild(tagButton);
    }
}


export function deleteKeyword(button, typeKeyword) {

    let selectedText = button.textContent.toLowerCase().trim();
    button.remove()

    switch (typeKeyword) {
        case 'ingredient':
            advancedFilters.ingredients = advancedFilters.ingredients.filter(ingredient => !selectedText.toLowerCase().includes(ingredient.toLowerCase()))
            break;

        case 'appliance':
            advancedFilters.appliances = advancedFilters.appliances.filter(appliance => !selectedText.toLowerCase().includes(appliance.toLowerCase()))
            break;

        case 'ustensil':
            advancedFilters.ustensils = advancedFilters.ustensils.filter(ustensil => !selectedText.toLowerCase().includes(ustensil.toLowerCase()))
            break;
    }
}
