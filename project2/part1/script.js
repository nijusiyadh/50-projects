const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const numbers = document.querySelectorAll(".numbers");

const progressContainer = document.querySelector(".progress-loader");

let progress = 0;

let curNumber = 0;

const maxNumber = numbers.length - 1;

let maxProgress = (numbers.length - 2) * 100;

console.log(maxProgress);

prevBtn.classList.add("inactive");

nextBtn.addEventListener("click", function () {
 if(curNumber < maxNumber) {
    curNumber++;
 }
  prevBtn.classList.remove("inactive");
  if (progress <= maxProgress) {
    progress += 100;
    numbers[curNumber].classList.add("active-number");
    progressContainer.style.width = `${progress}px`;
  } else {
    nextBtn.classList.add("inactive");
  }
});

prevBtn.addEventListener("click", function () {
  
  if (progress > 0) {
    numbers[curNumber].classList.remove("active-number");
    progress -= 100;
    progressContainer.style.width = `${progress}px`;
    if(curNumber >= 0) {
        curNumber--;
    }
  } else {
    prevBtn.classList.add("inactive");
    nextBtn.classList.remove("inactive");
  }
});
