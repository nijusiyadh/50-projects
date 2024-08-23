const goBtn = document.querySelector(".go-btn");
const counterContainer = document.querySelector(".counter");
const goContainer = document.querySelector(".go");
const countDisplay = document.querySelector(".count-display");

goBtn.addEventListener("click", (e) => {
  console.log("clicked");

  counterContainer.classList.remove("hidden");
  goContainer.classList.add("hidden");
  playAnimation();
});

function playAnimation() {
  for (let i = 0; i <= 3; i++) {
    displayCount(i);
  }
  setTimeout(() => {
    counterContainer.classList.add("hidden");
    goContainer.classList.remove("hidden");
  }, 4000);
}

function displayCount(number) {
  const span = document.createElement("span");
  span.classList.add("count");
  span.innerHTML = 3 - number;

  setTimeout(() => {
    countDisplay.innerHTML = "";
    countDisplay.appendChild(span);
  }, 1000 * number + 1);
}
