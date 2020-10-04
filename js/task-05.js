"use strict";
// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. якщо інпут порожній, 
// в спані повинен відображатися рядок 'незнайомець'.

/* <input type="text" placeholder="Ваше ім'я?" id="name-input" />
<h1>Привіт, <span id="name-output">незнайомець</span>!</h1> */

const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

const inputName = event => {
  const value = event.target.value;
  nameOutput.textContent = value ? value : "незнайомець";
};

nameInput.addEventListener("input", inputName);
