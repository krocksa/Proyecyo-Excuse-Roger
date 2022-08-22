/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
function randomNumber(array) {
  return Math.floor(Math.random() * array.length);
}
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let excusa = document.getElementById("excuse");
  excusa.innerHTML =
    who[randomNumber(who)] +
    " " +
    what[randomNumber(what)] +
    " " +
    when[randomNumber(when)];
};
