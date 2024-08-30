const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", (e) => {
  nav.classList.remove("hide");
});

closeBtn.addEventListener("click", (e) => {
  nav.classList.add("hide");
});
