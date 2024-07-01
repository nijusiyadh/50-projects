const glasses = document.querySelectorAll(".glass");
const unfilled = document.querySelector(".unfilled");
const filled = document.querySelector(".filled");
const filledValue = document.querySelector('.filled-value');
const unfilledValue = document.querySelector('.unfilled-value');

console.log(glasses);

const incre = 12.5;
let percentage = 0;
let cutWidth = 100;
let litter = 200;

glasses.forEach((glass,index) => {
  glass.addEventListener("click", function (e) {
    const glassNum = e.target.dataset.value;
    if (glassNum) emptyGlass(glassNum);
    else return;
    // cutWidth = cutWidth - (incre * glassNum)
  });
});

function emptyGlass(num) {
  if(glasses[num - 1].classList.contains('empty') && !glasses[num].classList.contains('empty')) {
    num--;
  }

  percentage = 0;
  cutWidth = 100;
  glasses.forEach((glass) => glass.classList.remove("empty"));
  for (let i = 0; i < num; i++) {
    glasses[i].classList.add("empty");
    fillWaterContainer();
  }
}

function fillWaterContainer() {
  //   console.log(cutWidth);
  percentage = percentage + incre;
  unfilled.style.height = `${cutWidth - incre}%`;
  filled.style.height = `${percentage}%`;
  cutWidth -= incre;
  filledValue.innerHTML = `${percentage}%`
  console.log(percentage);
  unfilledValue.innerHTML = `${(litter-(litter * (percentage / 100))) / 100 }L`
}
