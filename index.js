const express = require("express");
const path = require("path");

const app = express();
const port = process.env.port || 3000;

app.use(express.static("public"));

// app.use(express.static(path.join(__dirname, "/main")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

let [first, , second] = restaurant.categories;
[first, second] = [second, first];
console.log(first, second);
