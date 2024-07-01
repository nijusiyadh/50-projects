
const slides = document.querySelectorAll('.slide');

const body = document.body;

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;
setBgtoBody();

function setBgtoBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[activeSlide].classList.add('active');
    setBgtoBody();
}

rightBtn.addEventListener('click', function() {
    activeSlide++;
    if(activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    setActiveSlide();
})
leftBtn.addEventListener('click', function() {
    activeSlide--;

    if(activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    setActiveSlide();
})