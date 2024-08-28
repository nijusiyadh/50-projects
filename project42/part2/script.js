const userList = document.querySelector(".user-list");
const search = document.querySelector(".search");

let UserData = [];

const fetchUsers = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/?results=50");
    const data = await res.json();
    UserData = data.results;
    displayCards(UserData);
  } catch (error) {
    console.log(error);
  }
};

fetchUsers();

const displayCards = (data) => {
  userList.innerHTML = "";
  data.map((user) => {
    if (user) {
      const html = `
        <div class="user-card">
        <div class="avatar">
        <img src="${user.picture.medium}" alt="image">
        </div>
        <div class="user-info">
        <h1>${user.name.first} ${user.name.last}</h1>
        <p>${user.location.state}, ${user.location.country}</p>
        </div>
        </div>`;

      userList.insertAdjacentHTML("afterbegin", html);
    }
  });
};

search.addEventListener("input", (e) => {
  const text = e.target.value.toLowerCase();
  if (text.length <= 0) {
    displayCards(UserData);
  }
  const filterUser = UserData.map((user) => {
    const username = `${user.name.first} ${user.name.last}`;
    const loaction = `${user.location.state}, ${user.location.country}`;

    if (username.toLowerCase().includes(text)) {
      return user;
    }

    if (loaction.toLowerCase().includes(text)) {
      return user;
    }
  });

  displayCards(filterUser);
});
