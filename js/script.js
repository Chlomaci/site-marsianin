/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */




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
promoAdv.forEach(item => item.remove()); // убрали рекламу

let promoGenre = document.querySelector('.promo__genre');
promoGenre.textContent = "ДРАМА"; // поменяли жанр

let promoBG = document.querySelector('.promo__bg');
promoBG.style.backgroundImage = 'url("img/bg.jpg")'; // заменили картинку

let interactive = document.querySelector('.promo__interactive-list');
let oldFilms = interactive.querySelectorAll('li');
oldFilms.forEach(item => item.remove()); // удалили html-фильмы

let arrFilms = movieDB['movies'];
arrFilms.sort(); // отсортировали фильмы по алфавиту

let submitFilm = document.querySelector('.add button');
submitFilm.addEventListener('click', function(e) {
    e.preventDefault();
});  // страница перестала обновляться

    for (let i = 0; i < arrFilms.length; i++){
    interactive.innerHTML += `<li class="promo__interactive-item">${i+1 + " " + arrFilms[i]}<div class="delete"></div> </li>`;
} // показали фильмы на странице через js массив



let input = document.querySelector('.adding__input');


submitFilm.addEventListener('click', function(){
    if (input.value != '' && input.value != ' ' && input.value.length <= 21){
        arrFilms.push(input.value);
        arrFilms.sort(); 
        console.log(arrFilms);
        
        
        interactive.innerHTML = " ";
        for (let i = 0; i < arrFilms.length; i++){
            interactive.insertAdjacentHTML("beforeend", `<li class="promo__interactive-item">${i+1 + " " + arrFilms[i]}<div class="delete"></div> </li>`);
        } 
    } else if (input.value != '' && input.value != ' ' && input.value.length > 21) {
        let arr = input.value.split('');
        let newArr = arr.slice(0, 22).join('');
        newArr += "...";

        arrFilms.push(newArr);
        arrFilms.sort(); 
        console.log(arrFilms);
        
        interactive.innerHTML = " ";
        for (let i = 0; i < arrFilms.length; i++){
            interactive.insertAdjacentHTML("beforeend", `<li class="promo__interactive-item">${[i+1] + " " + arrFilms[i]}<div class="delete"></div> </li>`);
        } 
        interactive.replaceWith(newList);
    }
});



