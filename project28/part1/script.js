const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");

const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard("No Profile with this username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    addReposToCard(data);
    // console.log(data);
  } catch (error) {
    createErrorCard("Problem fethching repos");
  }
}

function createErrorCard(message) {
  const cardHTML = `
    <div class='card'>
        <h1> ${message} </h1>
    </div>
    `;

  main.innerHTML = cardHTML;
}

function createUserCard(user) {
  //   console.log(user);

  const cardHTML = `
    <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt="${user.name}"
            class="avathar"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
            ${user.bio}
          </p>
          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following}  <strong>Following</strong></li>
            <li>${user.public_repos}  <strong>Repos</strong></li>
          </ul>

          <div id="repos">
            
          </div>
        </div>
    `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.
  slice(0,5).
  forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
