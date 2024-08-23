

const toasts = document.querySelector('.toasts');
const btn = document.querySelector('.btn');

const messages = ['toast 1','toast 2','toast 3'];
const color = ['red','green','blue'];

btn.addEventListener('click', showToast);

function showToast() {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = getRandom(messages);
    toast.style.color = getRandom(color);
    toasts.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function getRandom(value) {
    return value[Math.floor(Math.random() * value.length)];
}
