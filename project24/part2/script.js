const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bg = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(() => {
  getData();
}, 2000);

function getData() {
  header.innerHTML = `
        <img src="pexels-cottonbro-4065622.jpg" alt="" />
    `;
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,optio.";

  profile_img.innerHTML = `
    <img src="istockphoto-1069531430-1024x1024.jpg" alt="" />`;
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08,2020";

  animated_bg.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_text.forEach((text) => text.classList.remove("animated-bg-text"));
}
