/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#Carta").classList.add(generateRandomPintas());
  document.querySelector("#Carta").innerHTML = generateRandomNumeros();
};

function generateRandomPintas() {
  let pintas = ["Diamante", "Spadas", "Corazones", "Picas"];

  let indexPintas = Math.floor(Math.random() * pintas.length);

  return pintas[indexPintas];
}

let generateRandomNumeros = () => {
  let numeros = [
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

  let indexNumeros = Math.floor(Math.random() * numeros.length);

  return numeros[indexNumeros];
};
