const boxes = document.getElementById("boxes");

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  boxes.classList.toggle("big");
});

const createBoxes = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxes.appendChild(box);
    }
  }
};

createBoxes();
