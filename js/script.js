/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promoAdv = document.querySelectorAll('.promo__adv img');
promoAdv.forEach(item => item.remove());

let promoGenre = document.querySelector('.promo__genre');
promoGenre.textContent = "ДРАМА";

let promoBG = document.querySelector('.promo__bg');
promoBG.style.backgroundImage = 'url("img/bg.jpg")';

let interactive = document.querySelector('.promo__interactive-list');
let oldFilms = interactive.querySelectorAll('li');
oldFilms.forEach(item => item.remove());

let arrFilms = movieDB['movies'];
arrFilms.sort();
console.log(arrFilms);

for (let i = 0; i < arrFilms.length; i++){
    interactive.insertAdjacentHTML("beforeend", `<li class="promo__interactive-item">${[i+1] + " " + arrFilms[i]}<div class="delete"></div> </li>`);
}








