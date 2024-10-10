import searchRecipes from "../modules/searchRecipes.js";
import displayRecipes from "../modules/dispayRecipes.js";
import { updateAdvancedSearchField } from "../modules/updateAdvancedSearchFields.js";
import { searchKeyword } from "../modules/searchKeyword.js";
import { displayKeyword } from "../modules/displayKeyword.js";
import { addKeyword } from "../modules/handleKeyword.js";
import { deleteKeyword } from "../modules/handleKeyword.js";

// fetch data
let recipesResponse = await fetch('./../../data/recipes.json');
let recipesObject = await recipesResponse.json();
let initialListToDisplay = recipesObject.recipes
let currentListToDisplay = initialListToDisplay

//show initial data 
displayRecipes(initialListToDisplay)
updateAdvancedSearchField(initialListToDisplay)

//when user click on button submit form
const buttonForm = document.querySelector('form button[type="submit"]');
buttonForm.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault(); 
});

// Logic when user entered character in the  main research field
const inputSearch = document.querySelector('.input-research')
inputSearch.addEventListener('input', (event) => {
    let inputSearchText = event.target.value.toLowerCase().trim()
    let foundRecipeslist = searchRecipes(inputSearchText, initialListToDisplay);
    displayRecipes(foundRecipeslist)
    updateAdvancedSearchField(foundRecipeslist)
    currentListToDisplay = foundRecipeslist

})

//Logic When the user does a search in advanced search fields
const advancedSearchInputs = document.querySelectorAll('.dropdown__content input')
advancedSearchInputs.forEach(advancedSearchInput => {
    advancedSearchInput.addEventListener('input', (event) => {
        //get type of advancedSearchInput
        let inputType = advancedSearchInput.closest('.dropdown__content').getAttribute('data-type');
        let inputSearchText = event.target.value.toLowerCase().trim()
        let filteredKeywords = searchKeyword(inputSearchText, inputType);
        displayKeyword(filteredKeywords, inputType)
    })
})

// Logic when the user clicks on a keyword contained in the dropdown
const dropdownContents = document.querySelectorAll('.dropdown__content');
dropdownContents.forEach(dropdownContent => {
    const typeKeyword = dropdownContent.getAttribute('data-type');

    dropdownContent.addEventListener('click', (event) => {
        if (event.target.tagName.toLowerCase() === 'li') {
            const selectedText = event.target.textContent.toLowerCase().trim();
            addKeyword(selectedText, typeKeyword);
            let filteredRecipes = searchRecipes("", currentListToDisplay);
            displayRecipes(filteredRecipes);
            updateAdvancedSearchField(filteredRecipes);
        }
    });
});

//logic when user click in tag to delete it
const tagsContainer = document.querySelector('.tags-container')
tagsContainer.addEventListener('click', (event) => {
    let button = event.target.tagName.toLowerCase() === 'button' ? event.target : event.target.closest('button');
    if (button) {
        const typeKeyword = button.getAttribute('data-type');
        deleteKeyword(button, typeKeyword);
        let filteredRecipes = searchRecipes("", currentListToDisplay);
        displayRecipes(filteredRecipes);
        updateAdvancedSearchField(filteredRecipes);
    }

});