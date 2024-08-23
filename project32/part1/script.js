const toggles = document.querySelectorAll(".toggle");

const good = document.querySelector("#good");
const cheep = document.querySelector("#cheep");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(theClickedOne) {
  if (good.checked && cheep.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }

    if (cheep === theClickedOne) {
      good.checked = false;
    }

    if (fast === theClickedOne) {
      good.checked = false;
    }
  }
}

/**
 * 
 */