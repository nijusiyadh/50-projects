const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

const slideCount = slides.length;
let activeSlideIndex = 0;
let translateValue = 0;
let animationOn = true;
let intervel;

runSlide(activeSlideIndex);

nextBtn.addEventListener("click", (e) => {
  clearInterval(intervel);
  if (activeSlideIndex > slideCount - 2) {
    translateValue = 0;
    activeSlideIndex = 0;
  } else {
    translateValue = translateValue - 100;
    activeSlideIndex++;
  }
  runSlide(translateValue);
});

prevBtn.addEventListener("click", (e) => {
  clearInterval(intervel);
  if (activeSlideIndex <= 0) {
    activeSlideIndex = slideCount - 1;
    translateValue = -(100 * activeSlideIndex);
  } else {
    activeSlideIndex--;
    translateValue = translateValue + 100;
  }
  runSlide(translateValue);
});

function runSlide(index) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${index}%)`;
  });
}

window.addEventListener("keydown", (e) => {
  clearInterval(intervel);
  if (e.key === "ArrowRight") {
    if (activeSlideIndex > slideCount - 2) {
      translateValue = 0;
      activeSlideIndex = 0;
    } else {
      translateValue = translateValue - 100;
      activeSlideIndex++;
    }
  }

  if (e.key === "ArrowLeft") {
    if (activeSlideIndex <= 0) {
      activeSlideIndex = slideCount - 1;
      translateValue = -(100 * activeSlideIndex);
    } else {
      activeSlideIndex--;
      translateValue = translateValue + 100;
    }
  }
  runSlide(translateValue);
});

function animateSlide() {
  intervel = setInterval(() => {
    if (activeSlideIndex >= slideCount - 1) {
      activeSlideIndex = 0;
      translateValue = 0;
    } else {
      translateValue = translateValue - 100;
      activeSlideIndex++;
    }
    runSlide(translateValue);
  }, 1500);
}

animateSlide();

nextBtn.addEventListener("mouseup", (e) => {
  setTimeout(() => {
    animateSlide();
  }, 300);
});

prevBtn.addEventListener("mouseup", (e) => {
  setTimeout(() => {
    animateSlide();
  }, 300);
});

window.addEventListener("keyup", (e) => {
  if ((e.key === "ArrowRight") | (e.key === "ArrowLeft")) {
    setTimeout(() => {
      animateSlide();
    }, 300);
  }
});
