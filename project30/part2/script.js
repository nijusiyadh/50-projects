const textDisplay = document.querySelector(".text");
const speed = document.getElementById("speed");

let DisplaySpeed = speed.value;
const displayContent = "We Love Programming!";
let intervel;
let DisplayText = [];

speed.addEventListener("change", (e) => {
  DisplaySpeed =
    e.target.value >= 10 ? 10 : e.target.value < 1 ? 1 : e.target.value;
  speed.value = DisplaySpeed;
  RunAnimation(DisplaySpeed);
});

const RunAnimation = (speed) => {
  intervel && clearInterval(intervel);
  const wordArray = displayContent.split("");
  const length = wordArray.length;
  let start = 0;
  let Array = [];
  if (DisplayText.length > 0) {
    Array = DisplayText;
    start = Array.length;
  }

  intervel = setInterval(() => {
    DisplayText.push(wordArray[start]);
    if (start < length) {
      start++;
    } else {
      textDisplay.innerHTML = "";
      DisplayText = [];
      start = 0;
    }

    textDisplay.innerHTML = DisplayText.join("");
  }, Math.floor(5000 / (DisplaySpeed * 9)));
};

RunAnimation(DisplaySpeed);
