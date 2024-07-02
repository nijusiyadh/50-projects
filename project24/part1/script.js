
const imageHeader = document.querySelector('.image-container');
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const pText = document.querySelectorAll('.p-text');
const profileImage = document.querySelector('.profile');
const name = document.querySelector('.name');
const date = document.querySelector('.date');


const loadData = function() {
    imageHeader.innerHTML =`
    <img src="pexels-cottonbro-4065622.jpg" alt="">
    `;
    

    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    text.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, animi? ';
    profileImage.innerHTML = `<img src="istockphoto-1069531430-1024x1024.jpg" alt=""> `;
    name.innerHTML = 'John Dee';
    date.innerHTML = 'Oct 04,3034';
    imageHeader.classList.remove('preload');
    title.classList.remove('preload');
    text.classList.remove('preload');
    profileImage.classList.remove('preload');
    name.classList.remove('preload');
    date.classList.remove('preload');
    pText.forEach(text => {
        text.classList.remove('preload');
        text.style.display = 'none';
    })
}

setTimeout(() => {
    loadData();
}, 2000);