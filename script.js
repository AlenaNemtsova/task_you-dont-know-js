'use strict';

const books = document.querySelectorAll('.book');
const body = document.querySelector('body');
const booksTitle = document.querySelectorAll('.book a');
const adv = document.querySelector('.adv');

books[0].before(books[1]);
books[4].after(books[3]);
books[5].after(books[2]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

booksTitle[4].textContent = 'Книга 3. this и Прототипы Объектов';

adv.style.visibility = 'hidden';

const book2Chapters = books[0].querySelectorAll('li');
book2Chapters[1].after(book2Chapters[3]);
book2Chapters[3].after(book2Chapters[6]);
book2Chapters[6].after(book2Chapters[8]);
book2Chapters[9].after(book2Chapters[2]);

const book5Chapters = books[5].querySelectorAll('li');
book5Chapters[1].after(book5Chapters[9]);
book5Chapters[4].after(book5Chapters[2]);
book5Chapters[7].after(book5Chapters[5]);

const book6Chapters = books[2].querySelectorAll('li');
book6Chapters[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');
