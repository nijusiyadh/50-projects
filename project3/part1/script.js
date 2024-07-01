const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

const rotateCard = document.querySelector(".rotate-card");
const sideBarMenu = document.querySelector('.side-menu');

const rotateContainer = document.querySelector(".menu-close");

menuIcon.addEventListener("click", function () {
  rotateContainer.style.transform = "rotate(-90deg)";
  rotateCard.style.transform = "rotate(-15deg)";
  sideBarMenu.style.left = '10px';
});

closeIcon.addEventListener("click", function () {
  rotateContainer.style.transform = "rotate(0deg)";
  sideBarMenu.style.left = '-150px';
  rotateCard.style.transform = "rotate(0deg)";
});
