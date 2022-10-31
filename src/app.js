import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Tooltip } from "bootstrap";

window.onload = function() {
  const pintas = ["♠", "♣", "♥", "♦"];

  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomNumber = numeros[Math.floor(Math.random() * numeros.length)];
  let randomSymbol = pintas[Math.floor(Math.random() * pintas.length)];

  document.getElementById("top").innerHTML = randomSymbol;
  document.getElementById("number").innerHTML = randomNumber;
  document.getElementById("bottom").innerHTML = randomSymbol;
};
