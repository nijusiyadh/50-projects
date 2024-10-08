const screens = document.querySelectorAll(".screen");
const choose_insect_btn = document.querySelectorAll(".choose-insect-btn");
const start_btn = document.getElementById("start-btn");
const game_container = document.getElementById("game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");

let seconds = 0;
let score = 0;
let selected_insect = {};

start_btn.addEventListener("click", (e) => {
  screens[0].classList.add("up");
});

choose_insect_btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");

    selected_insect = { src, alt };

    screens[1].classList.add("up");
    setTimeout(() => {
      createInsect();
    }, 1000);
    startGame();
  });
});

function createInsect() {
  const insect = document.createElement("div");
  insect.classList.add("insect");
  const { x, y } = getRandomLocation();

  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;

  insect.innerHTML = `<img src='${selected_insect.src}' alt='${
    selected_insect.alt
  }' style='transform: rotate(${Math.random() * 360}deg) />`;

  game_container.appendChild(insect);

  insect.addEventListener("click", catchInsect);
}

function startGame() {
  setInterval(() => {
    increaseTime();
  }, 1000);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const x = Math.floor(Math.random() * (width - 200) + 100);
  const y = Math.floor(Math.random() * (height - 200) + 100);

  return { x, y };
}

function catchInsect() {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => {
    this.remove();
  }, 2000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 6;

  m = m < 10 ? `0${m}` : m;
  m = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}${s}`;
  seconds++;
}

function increaseScore() {
  score++;
  if (score > 10) {
    message.classList.add("visible");
  }
  scoreEl.innerHTML = `Score: ${score}`;
}

function addInsects() {
  setTimeout(() => {
    createInsect();
  }, 1000);
  setTimeout(() => {
    createInsect();
  }, 1500);
}
