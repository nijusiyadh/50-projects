const cells = document.querySelectorAll(".cell");

const colors = [
  "#7C93C3",
  "#7A1CAC",
  "#41B3A2",
  "#FF8A8A",
  "#5B99C2",
  "#FF8343",
  "#F9E400",
  "#399918",
  "#E4003A",
  "#77E4C8",
  "#9BEC00",
  "#003285",
  "#EEF7FF",
  "#EEA5A6",
  "#E493B3",
  "#B784B7",
  "#8E7AB5",
  "#2D9596",
  "#392467",
  "#A367B1",
  "#F3F8FF",
  "#FF90BC",
  "#C5FFF8",
  "#522258",
  "#8C3061",
  "#C63C51",
  "#FF4E88",
  "#FF8C9E",
  "#FFDA76",
  "#B4D6CD",
  "#FF0063",
  "#FF2C2C",
  "#FFEFEF",
  "#1E5128",
  "#4E9F3D",
];

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", (e) => {
    cell.classList.remove("dim");
    const randomIndex = Math.floor(Math.random() * colors.length);
    cell.style.backgroundColor = `${colors[randomIndex]}`;
  });

  cell.addEventListener("mouseout", (e) => {
    console.log("mouse out");

    setTimeout(() => {
      console.log("adding dim");
      cell.style.opacity = "90%";
    }, 1000);
    setTimeout(() => {
      console.log("adding dim");
      cell.style.opacity = "80%";
    }, 1400);

    setTimeout(() => {
      console.log("adding dim");
      cell.style.opacity = "70%";
    }, 1800);
    setTimeout(() => {
      console.log("adding dim");
      cell.style.opacity = "60%";
    }, 2200);

    setTimeout(() => {
      console.log("adding dim");
      cell.style.opacity = "50%";
    }, 2700);
    setTimeout(() => {
      console.log("adding dim");
      cell.style.opacity = "40%";
    }, 3000);
    setTimeout(() => {
      console.log("adding dim");
      cell.style.opacity = "30%";
    }, 3600);
    setTimeout(() => {
      console.log("adding dim");
      cell.style.opacity = "20%";
    }, 3900);
    setTimeout(() => {
      console.log("adding dim");
      cell.style.backgroundColor = `rgb(39, 40, 41)`;
      cell.style.opacity = "10%";
    }, 4300);

    setTimeout(() => {
      console.log("adding dim");
      cell.style.backgroundColor = `rgb(39, 40, 41)`;
      cell.style.opacity = "100%";
    }, 4600);
  });
});
