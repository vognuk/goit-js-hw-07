"use strict";

// Напиши скрипт, який реагує на зміну значення 
// input#font-size-control (подія input) і змінює інлайн-стиль 
// span#text оновлюючи властивість font-size. В результаті при п
// еретягуванні повзунка змінюватиметься розмір тексту.

const fontSizeRanger = document.querySelector("#font-size-control");
const rangingText = document.querySelector("#text");

const textSizeChange = event => {
    rangingText.style.fontSize = `${event.target.value}px`;
};

fontSizeRanger.addEventListener("input", textSizeChange);
