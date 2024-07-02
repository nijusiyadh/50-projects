const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

let size = 10;
let color = "black";
let x;
let y;
let isPressed = false;

canvas.addEventListener("mousedown", function (e) {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", function (e) {
  isPressed = false;

  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", function (e) {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

colorEl.addEventListener("change", function (e) {
  color = e.target.value;
});

increase.addEventListener("click", function () {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  updatesize();
});
decrease.addEventListener("click", function () {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  updatesize();
});

clearEl.addEventListener("click", function () {
 
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function updatesize() {
  sizeEl.innerHTML = size;
}
