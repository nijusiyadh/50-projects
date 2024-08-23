const button = document.getElementById("button");

const toasts = document.getElementById("toasts");

const messages = [
  "message One",
  "message two",
  "message three",
  "message four",
  "message five",
];

const types =[
    'info','success','error'
];

button.addEventListener("click",() => createNotification('This is invalid data'));

function createNotification(message = null,tyle = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(tyle ? tyle : getRandomType());
  notif.innerHTML = message ? message : getRandomMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}


function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}