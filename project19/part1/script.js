const btn = document.querySelector(".modeBtn");
const container = document.querySelector(".container");
const time = document.querySelector(".time");
const seconds = document.querySelector(".sec");
const minutes = document.querySelector(".min");
const hours = document.querySelector(".hour");
const dates = document.querySelector(".date");
const days = document.querySelector(".day");

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUI",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const DaysArray = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATERDAY",
];

btn.addEventListener("click", function () {
  if(container.classList.contains('dark')) {
    container.classList.remove('dark');
    btn.innerHTML = 'Dark Mode';
  }else {
    container.classList.add('dark');
    btn.innerHTML = 'Light Mode';
  }
  // container.classList.toggle("dark");
});

window.addEventListener("load", function () {
  setInterval(() => {
    getTime();
  }, 1000);
});

const setDate = function (day, month,today) {
  dates.innerHTML = "";
  const html = `
    ${DaysArray[today]} , ${months[month]} <span class="day">${day}</span>
    `;
  dates.insertAdjacentHTML("afterbegin", html);
};

const setDigitalCloak = function (hour, min, sec, ampm) {
  time.innerHTML = `${hour} : ${min} ${ampm}`;
};

const loadMechanicalClock = function (hour, min, sec) {
  // console.log(hour);
  seconds.style.transform = `rotate(${270 + sec * 6}deg)`;
  minutes.style.transform = `rotate(${270 + min * 6}deg)`;
  hours.style.transform = `rotate(${270 + hour * 30}deg)`;
};

const getTime = function () {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const today = date.getDay();

  const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const min =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const sec = date.getSeconds();
  const ampm = date.getHours() > 12 ? "PM" : "AM";

  setDigitalCloak(hour, min, sec, ampm);
  loadMechanicalClock(hour, min, sec);
  setDate(day, month,today);
};

getTime();
