/*

Напиши скрипт, який виконає наступні операції.

Порахує і виведе в консоль кількість категорій в ul#categories, 
тобто елементів li.item. Вийде 'У списку 3 категорії.'.

Для кожного елемента li.item в списку ul#categories, знайде і 
виведе в консоль текст заголовка елемента (тега h2) і кількість елементів 
в категорії (всіх вкладених в нього елементів li).

Наприклад, для першої категорії вийде:

Категорія: Тварини
Кількість елементів: 4

*/

'use strict'

// Print sum of categories

const selectByIdOfEl = document.querySelector('#categories');

console.log(`
    У списку ${selectByIdOfEl.children.length} категорії.
`);

// Print name of category and sum of items
// ver.1

const liEl = selectByIdOfEl.querySelectorAll('li.item');

[].forEach.call(liEl, liNodeEl => {

    console.log(`
      Категорія: ${liNodeEl.querySelector('h2').textContent}.
    `);

    console.log(`
      Кількість: ${liNodeEl.querySelector('ul').children.length}.
    `);
    
  });

// ver.2

// const allNodesInEl = Array.from(selectByIdOfEl.childNodes);

// for (let i = 0; i < allNodesInEl.length; i++) {

//     if (i % 2 !== 0) {
//         let categoryNameInsideEl = allNodesInEl[i].querySelector('h2');
        
//         let itemsListFromEl = allNodesInEl[i].querySelector('ul').children.length;
       
//         console.log(`
//             Категорія: ${categoryNameInsideEl.textContent}.  
//             Кількість: ${itemsListFromEl}.
//         `);
//     }  
// }


