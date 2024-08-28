const images = document.querySelectorAll(".mobile-image img");

const buttons = document.querySelectorAll(".btn");

let selectedIndex = 0;

buttons.forEach((button, idx) => {
  button.addEventListener("click", (e) => {
    selectedIndex = idx;
    runInit(selectedIndex);
  });
});

const showImage = (index) => {
  images.forEach((img) => img.classList.remove("show"));
  images[index].classList.add("show");
};

const addIndicator = (index) => {
  buttons.forEach((btn) => btn.classList.remove("active"));
  buttons[index].classList.add("active");
};

const runInit = (index) => {
  showImage(index);
  addIndicator(index);
};

runInit(selectedIndex);
