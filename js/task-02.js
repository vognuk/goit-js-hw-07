/* В HTML є пустий список ul#ingredients.

<ul id="ingredients"></ul>
В JS є масив рядків.

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

Напиши скрипт, який для кожного елемента масиву ingredients створить 
окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. 
Для створення DOM-вузлів використовуй document.createElement().
*/

'use strict'

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];

  let htmlString = '';

  for (let i = 0; i < ingredients.length; i++) {

    const itemCreator = document.createElement('li'); 
    itemCreator.textContent = ingredients[i];
    htmlString += itemCreator.outerHTML;

  }

  console.log(htmlString); 

  const nav = document.querySelector("#ingredients");

  nav.insertAdjacentHTML('afterbegin', htmlString);
  