const tags = document.querySelector(".tags");

const input = document.getElementById("textarea");

input.addEventListener("keyup", function (e) {
  createTag(e.target.value);

  if (e.key === "Enter") {
    randomPick();
  }
});

function createTag(input) {
  const tagArray = input
    .split(",")
    .filter((tag) => tag !== "")
    .map((tag) => tag.trim());

  tags.innerHTML = "";

  tagArray.forEach((tag) => {
    const tagEl = document.createElement("span");

    tagEl.classList.add("tag");

    tagEl.innerHTML = tag;

    tags.appendChild(tagEl);
  });
}

function randomPick() {
  const times = 30;

  const intervel = setInterval(() => {
    const random = pickRandom();

    highlight(random);

    setTimeout(() => {
      unhighlight(random);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(intervel);
    setTimeout(() => {
      const random = pickRandom();
      highlight(random);
    }, 100);
  }, times * 100);
}

function pickRandom() {
  const tags = document.querySelectorAll(".tag");

  return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
  tag.classList.add("heighlight");
}

function unhighlight(tag) {
  tag.classList.remove("heighlight");
}
