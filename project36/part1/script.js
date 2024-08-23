const container = document.getElementById("container");

const colors = [
  "#7C93C3",
  "#7A1CAC",
  "#41B3A2",
  "#FF8A8A",
  "#5B99C2",
  "#FF8343",
  "#F9E400",
  "#399918",
  "#E4003A",
  "#77E4C8",
  "#9BEC00",
  "#003285",
  "#EEF7FF",
  "#EEA5A6",
  "#E493B3",
  "#B784B7",
  "#8E7AB5",
  "#2D9596",
  "#392467",
  "#A367B1",
  "#F3F8FF",
  "#FF90BC",
  "#C5FFF8",
  "#522258",
  "#8C3061",
  "#C63C51",
  "#FF4E88",
  "#FF8C9E",
  "#FFDA76",
  "#B4D6CD",
  "#FF0063",
  "#FF2C2C",
  "#FFEFEF",
  "#1E5128",
  "#4E9F3D",
];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}

function setColor(square) {
  const color = getRandomColor();
  square.style.background = color;
  square.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}

function removeColor(square) {
  square.style.background = "#1d1d1d";
  square.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
