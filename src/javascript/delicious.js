const library = require('./library.json');

const minimumWait = 2000;

const listItems = library
    .filter(item => item.hasOwnProperty('coverImageLargeURLString'))
    .map((item, i) => {
        return `
		<div class="delicious-item" style="background-image: url(${
            item.coverImageLargeURLString
        })">
			<div class="title">${item.title}</div>
		</div>
	`;
    });

const initApp = () => {
    const app = document.getElementById('delicious-app');
    return setTimeout(() => (app.innerHTML = listItems), minimumWait);
};

initApp();
