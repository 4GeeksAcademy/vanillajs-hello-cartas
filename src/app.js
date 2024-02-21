/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", function() {
  const widthInput = document.getElementById("widthInput");
  const heightInput = document.getElementById("heightInput");
  const carta = document.getElementById("carta");

  function generarCarta() {
    const palos = ["♠", "♣", "♥", "♦"];
    const valores = [
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
      "K",
      "A"
    ];

    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

    const width = widthInput.value + "px";
    const height = heightInput.value + "px";

    carta.style.width = width;
    carta.style.height = height;
    carta.classList = "card " + paloAleatorio.toLowerCase();
    carta.querySelector(".top-left").innerHTML = paloAleatorio;
    carta.querySelector(".bottom-right").innerHTML = paloAleatorio;
    carta.querySelector(".number").innerHTML = valorAleatorio;

    if (paloAleatorio === "♥" || paloAleatorio === "♦") {
      carta.querySelector(".top-left").style.color = "red";
      carta.querySelector(".bottom-right").style.color = "red";
    } else {
      carta.querySelector(".top-left").style.color = "black";
      carta.querySelector(".bottom-right").style.color = "black";
    }
  }

  generarCarta();

  document
    .getElementById("nuevaCartaBtn")
    .addEventListener("click", function() {
      generarCarta();
    });
});
