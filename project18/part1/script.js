

const slide = document.querySelector('.slide');

const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');

const slideEl = document.querySelectorAll('.slide-el');
const container = document.querySelector('.container');

let activeSlide = 1;

setBackground();

function setBackground() {
    container.style.backgroundImage = `url(img${activeSlide}.jpeg)`
}



right.addEventListener('click', function() {
    console.log('click');
    activeSlide++;
    if(activeSlide > slideEl.length) {
        activeSlide = 1;
    }
    slideImage();
    
})
left.addEventListener('click', function() {
    console.log('click');
    activeSlide--;
    if(activeSlide <= 0) {
        activeSlide = slideEl.length;
    }

    slideImage();
    
})



function slideImage() {
    

    
    slideEl.forEach(slide => {
        slide.classList.remove('active');
    });
    
    slideEl[activeSlide - 1].classList.add('active');
    setBackground();
}