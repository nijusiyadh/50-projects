// const input = document.querySelector('.input');

// const label = document.querySelector('.input label');

// const labelSpan = label.innerHTML.split('');

// console.log(labelSpan);
// label.innerHTML = '';

// labelSpan.forEach((letter,index) => {
//     html = `<span style='transition-delay:${index * 50}ms'>${letter}</span>`;

//     label.insertAdjacentHTML('beforeend',html)
// })

let curSlide = 0;

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll(".slideEl");

window.addEventListener("load", function() {
    slider.style.gridTemplateColumns = `repeat(${slides.length},100%)`;
});


window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    curSlide -= 100;

    if (curSlide < -(slides.length-1) * 100) {
      curSlide = 0;
    }

    slides.forEach((slide) => {
      slide.style.transform = `translateX(${curSlide}%)`;
    });
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    curSlide += 100;

    if (curSlide > 0) {
      curSlide = -(slides.length - 1) * 100;
    }

    slides.forEach((slide) => {
      slide.style.transform = `translateX(${curSlide}%)`;
    });
  }
});

