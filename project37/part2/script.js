function createCards() {
  for (i = 1; i < 100; i++) {
    fetchData(i);
  }
}

async function fetchData(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await res.json();
    displayCards(data);
  } catch (error) {
    console.log(error.message);
  }
}

const container = document.querySelector(".container");

function displayCards(data) {
  const backgroundColor =
    data.types[0].type.name === "grass"
      ? "#9fe6a0"
      : data.types[0].type.name === "fire"
      ? "#FE8F8F"
      : data.types[0].type.name === "sky"
      ? "#9DF1DF"
      : data.types[0].type.name === "rock"
      ? "#999B84"
      : data.types[0].type.name === "water"
      ? "#B3E55E"
      : data.types[0].type.name === "poison"
      ? "#D19FEB"
      : data.types[0].type.name === "ghost"
      ? "#4C5FB1"
      : "#F5CAB3";
  const html = `<div class="cards" >
          <div class="card" style="background-color: ${backgroundColor};" >
            <div class="top">
              <div class="image">
                <img src="${data.sprites.other["official-artwork"].front_default}" alt="image" />
              </div>
              <span class="id"> #00${data.id} </span>
            </div>
            <div class="bottom">
              <h3 class="name">${data.name}</h3>
              <span class="type-text">
                <span>Type:</span>
                <span>${data.types[0].type.name}</span>
              </span>
            </div>
          </div>
        </div>`;

  container.insertAdjacentHTML("beforeend", html);
}

createCards();
