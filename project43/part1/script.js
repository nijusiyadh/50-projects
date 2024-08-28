const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".rating-container");

const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br/>
    <strong>Feedbadk: ${selectedRating} </strong>
    <p>We'll user your feedback to improve out customer support</p>`;
});

function removeActive() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}
