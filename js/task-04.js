"use strict";
// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */

let currentValue = 0;
const valueOfCounter = document.querySelector("#value");

const decrement = document.querySelector('#counter button[data-action="decrement"]');
const countDown = () => {
   valueOfCounter.textContent = currentValue -= 1;
};
decrement.addEventListener("click", countDown);

const increment = document.querySelector('#counter button[data-action="increment"]');
const countUp = () => {
   valueOfCounter.textContent = currentValue += 1;
};
increment.addEventListener("click", countUp);
  