const password = document.getElementById("password");
const backgroundImage = document.querySelector(".background");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;

  const blur = 20 - length * 2;

  backgroundImage.style.filter = `blur(${blur}px)`;
});
