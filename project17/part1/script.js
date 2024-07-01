const movieGrid = document.querySelector(".grid");
const searchInput = document.querySelector(".searchInput");
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3122883feffda52cf426c1efdce72d53&page=1';

const IMG_PATH ='https://image.tmdb.org/t/p/w1280';

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=3122883feffda52cf426c1efdce72d53&query=';


const loadOverView = function () {
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((card) => {
    card.addEventListener("mouseover", function () {
      card.classList.add("show");
    });
    card.addEventListener("mouseout", function () {
      card.classList.remove("show");
    });
  });
};

const displaySearchCard = async function (input) {
  movieGrid.innerHTML = "";
  try {
    const res = await fetch(
      `${SEARCH_URL}${input}`
    );
    const data = await res.json();

    data.results.forEach((data) => {
      displayCard(data);
    });
  } catch (error) {
    console.log(error);
  }
};

searchInput.addEventListener("keydown", function (e) {
    // if (e.key === "Enter") {
    //   displaySearchCard(searchInput.value);
    // }
  displaySearchCard(searchInput.value);
});

const displayCard = function (data) {
  //   const movieCard = `
  //   <a href="${data.posterURL}">
  //     <div class="movie-card">
  //           <div class="image">
  //             <img src="${data.posterURL}" alt="" />
  //           </div>
  //           <div class="content">
  //             <div class="text">
  //               ${data.title}
  //             </div>
  //             <div class="rating">5.5</div>
  //           </div>
  //           <div class="overView">
  //               <h4>OverView</h4>
  //               <p>
  //                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //                 Consectetur quia repellat laboriosam, perferendis labore
  //                 veritatis saepe quod molestiae necessitatibus odio
  //                 exercitationem dicta. Atque blanditiis quos eligendi! Illo
  //                 debitis delectus minima!
  //               </p>
  //         </div>
  //     </div>
  //     </a>
  //     `;
  const movieCard = `
      <a href="${data.website}">
    <div class="movie-card">
          <div class="image">
            <img src="${IMG_PATH}${data.poster_path}" alt="" />
          </div>
          <div class="content">
            <div class="text">
              ${data.title}
            </div>
            <div class="rating" style="color:${data.vote_average > 8 ? 'green': data.vote_average < 4 ? 'red': 'orange'}"">${data.vote_average}</div>
          </div>
          <div class="overView">
              <h4>OverView</h4>
              <p>
                ${data.overview}
              </p>
        </div>
    </div>
    </a>
      `;

  movieGrid.insertAdjacentHTML("afterbegin", movieCard);
  loadOverView();
};

const getData = async function () {
  try {
    const res = await fetch(API_URL);
    // const res = await fetch("https://freetestapi.com/api/v1/movies");
    // const res = await fetch("https://api.sampleapis.com/movies/animation");
    const data = await res.json();

    console.log(data.results);
    
    data.results.forEach((data) => {
      displayCard(data);
    });
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("load", getData);
