const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    hideAllContents();
    hideAllItems();
    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove("show"));
}
1
function hideAllItems() {
  listItems.forEach((item) => item.classList.remove("active"));
}


