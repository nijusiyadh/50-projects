const twitterCounter = document.querySelector(".twitter-counter");
const youtubeCounter = document.querySelector(".youtube-counter");
const facebookCounter = document.querySelector(".facebook-counter");

const twMax = 12000;
const ytMax = 5000;
const fbMax = 7500;

const starter = 0;
let time = 0.2;

window.addEventListener("load", function () {
  CountTwitter();
  CountYoutube()
  CountFacebook();
});

function CountTwitter() {
  // time = twMax / 90000;
  for (let i = 0; i <= twMax; i++) {
    setTimeout(() => {
      twitterCounter.textContent = i;
    }, i * time);
  }
}

function CountYoutube() {
  // time = ytMax / 90000;
    for (let i = 0; i <= ytMax; i++) {
      setTimeout(() => {
        youtubeCounter.textContent = i;
      }, i * time);
    }
  }

  function CountFacebook() {
    // time = fbMax / 90000;
    for (let i = 0; i <= fbMax; i++) {
      setTimeout(() => {
        facebookCounter.textContent = i;
      }, i * time);
    }
  }