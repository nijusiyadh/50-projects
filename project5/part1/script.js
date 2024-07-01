const imagebody = document.querySelector(".body");
const loader = document.querySelector('.loader');

window.addEventListener("load", function () {
    blurLoader();
});

let counter = 0;

const blurLoader =function() {
   for (let i = 0; i <= 100; i++) {
    setTimeout(() => {
        loader.innerHTML = `${i}%`
        imagebody.style.filter = `blur(${(100 - i)}px)`;
        loader.style.opacity = `${(100 - i) / 100}`
    }, 20 * i);
   }
}