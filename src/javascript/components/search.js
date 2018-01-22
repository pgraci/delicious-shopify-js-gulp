const searchInput = document.getElementById('delicious-header-search-input');
const searchButton = document.getElementById('delicious-header-search-button');

function handleSearch() {
    console.log(searchInput.value);
    //fire action to search store
}

function listen() {
    searchButton.addEventListener('click', handleSearch);
}

export default {
    listen
};
