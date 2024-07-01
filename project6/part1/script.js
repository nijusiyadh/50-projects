const scrollElement = document.querySelectorAll(".scroll-element");


const checkBoxes = function () {
  const triggerBottom = (window.innerHeight / 5) * 4;

  scrollElement.forEach((box) => {
    const boxtop = box.getBoundingClientRect().top;

    if (boxtop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", checkBoxes);
