const closeBtn = document.getElementById('delicious-close-modal');
const modal = document.getElementById('delicious-details-modal');

function handleOpenModal() {
    modal.classList.add('is-visible');
}

function handleCloseModal() {
    modal.classList.remove('is-visible');
}

function listen() {
    closeBtn.addEventListener('click', handleCloseModal);
    const items = document.querySelectorAll('.delicious-item');
    Array.from(items).forEach(item => {
        item.addEventListener('click', handleOpenModal);
    });
}

export default {
    listen
};
