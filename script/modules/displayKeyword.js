export function displayKeyword(filteredkeyword, type) {
    let listElement = document.querySelector(`.dropdown__content[data-type=${type}] ul`)
    listElement.innerHTML = '';
    const listElementHTML = filteredkeyword.map(itemValue => `<li>${itemValue}</li>`).join('');
    listElement.innerHTML = listElementHTML;
}