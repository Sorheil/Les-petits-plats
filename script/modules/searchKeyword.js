import { listkeyWords } from "./updateAdvancedSearchFields.js";

export function searchKeyword(keyword, type) {
    const searchLowerCase = keyword.toLowerCase().trim();

    switch (type) {
        case 'ingredient':
            return listkeyWords['ingredients'].filter(ingredient =>
                ingredient.toLowerCase().includes(searchLowerCase)
            );

        case 'appliance':
            return listkeyWords['appliances'].filter(appliance =>
                appliance.toLowerCase().includes(searchLowerCase)
            );

        case 'ustensil':
            return listkeyWords['utensils'].filter(ustensil =>
                ustensil.toLowerCase().includes(searchLowerCase)
            );

        default:
            return [];
    }
}
