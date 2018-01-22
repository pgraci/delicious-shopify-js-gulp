import modal from './components/modal';
import items from './components/items';
import search from './components/search';

const minimumWait = 2000;

const initApp = () => {
    return setTimeout(() => {
        items.render();
        modal.listen();
        search.listen();
    }, minimumWait);
};

initApp();
