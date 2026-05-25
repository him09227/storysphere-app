const points = document.getElementById("points");

let value = 12000;

setInterval(() => {

  value += Math.floor(Math.random() * 5);

  points.innerHTML = value;

}, 2000);
