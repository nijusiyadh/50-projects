
const open = document.getElementById('open');
const close = document.getElementById('close');

const constainer = document.querySelector('.container');

open.addEventListener('click', () => {
    constainer.classList.add('show-nav');
})

close.addEventListener('click', () => {
    constainer.classList.remove('show-nav');
})
