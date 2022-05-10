"use scrict";

console.log("sup");

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

console.log(secretNumber);

document.querySelector(".create").addEventListener("click", function (event) {
  event.preventDefault();
  const newDish = document.querySelector(".input-dish").value;
  let ol = document.getElementById("menu");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(newDish));
  ol.appendChild(li);
});

document.querySelector(".retrieve").addEventListener("click", function (event) {
  event.preventDefault();
  var container = document.getElementById("menu");
  var lastchild = container.lastChild;
  document.querySelector(".input-dish").value = lastchild;
  document.querySelector(".selected-dish").textContent = lastchild;
});

document.querySelector(".update").addEventListener("click", function (event) {
  event.preventDefault();
  const newDish = document.querySelector(".input-dish").value;
  document.querySelector(".selected-dish").textContent = newDish;
});
