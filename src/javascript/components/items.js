const library = require('../library.json');

const libraryContainer = document.getElementById('delicious-app-library');

const render = () => {
    let libraryItems = '';
    library
        .filter(item => item.hasOwnProperty('coverImageLargeURLString'))
        .map((item, i) => {
            libraryItems += `
                <div
                    class="delicious-item"
                    style="background-image: url(${
                        item.coverImageLargeURLString
                    })"
                >
                    <div class="title">${item.title}</div>
                </div>
            `;
        });

    return (libraryContainer.innerHTML = libraryItems);
};

export default {
    render
};
