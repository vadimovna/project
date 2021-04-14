"use strict";

/* let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj); */

/* let number = 4.6; 

console.log(4/0);
console.log('string' * 9);

const persone = '5';

const bool = true;

console.log(something); null

let und;
console.log(und); undefined

const obj = {   объекты
    name: 'John',
    age: 25,
    isMaried: false
};

// console.log(obj.name);
console.log(obj ['name']); 


                0           1        2        3      4    5
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]; массивы
console.log(arr[1]); */

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

//const answer = +prompt('Вам есть 18?', '18'); инф от пользователя приходит в виде строки, 
//но если поставим + перед prompt, то тип данных изменится на числовой
//console.log(answer + 5);

//const answers = [];

//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Как ваша фамилия?', '');
//answers[2] = prompt('Сколько вам лет?', '');

//console.log(typeof(answers));
//console.log(typeof(null));


//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`)

//const user = 'Ivan';

//alert(`Привет, ${user}`)

//console.log('arr' + ' - object');
//console.log(4 + '5');


//let incr = 10,
    //decr = 10;

//incr++;
//decr--;  

//console.log(++incr);
//console.log(--decr);

//console.log(5%2);

//console.log(2 + 2 * 2 === 8); // == сравнение без типа данных, === строгое сравнение по типу 

//&& //оператор "и" работает с двумя правдивыми выражениями
//|| //оператор "или" хотя бы одно выражение должно быть правдиво
//! //оператор отрицания, ложь в правду и наоборот
//!= //не равен

//const isCheked = true,
      //isClose = false;

//console.log(isCheked || !isClose);

//const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
//*создать переменую numberOfFilms и в неё поместить ответ от пользователя на вопрос 'Сколько ф. вы уже посм?'

/*const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; //создать объект personalMovieDB и в него поместить такие св-ва (count, movies и тд).

const a = prompt('Один из  последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из  последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', ''); //задать пользователю по 2 раза вопросы

personalMovieDB.movies[a] = b;   
personalMovieDB.movies[c] = d; 
//записать ответы в объект movies в формате: 
// movies: {
// 'logan': '8.1'
//};

//- мы берем объект personalMovieDB и обращаемся к его свойству movies
//- movies - это тоже объект, значит мы можем тоже обращаться к свойствам. И если мы обращаемся к свойству, 
//которого еще не существует - оно будет создано.
//- к тому же, мы это можем сделать не только через точку, но и через квадратные скобки, 
//чтобы избежать проблем с кириллицей. Так что обращаемся personalMovieDB.movies[a]
//- a - это ответ на первый вопрос, и он будет записан в качестве свойства
//- b - это ответ на второй вопрос и он будет записан в качестве значения этого свойства.
//получим:
// const personalMovieDB = {
//     movies: {
    //  a: b
//  }
//}

//console.log(personalMovieDB);
*/

//Условия

/*if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}*/

//const num = 50;

/*if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}*/

//Тернарный оператор
/*const num = 50;

(num === 50) ? console.log('Ok!') : console.log('Error');*/

//конструкция switch - это модификация if, кот. содержит неск. проверок и условий

/*const num = 50; //swith проверяет на строгое соответсвие 

switch (num) {
    case 49: //если переменная будет равна 49, то в консоль выведем 'Неверно'
        console.log('Неверно');
        break; //break - после каждого действия, чтобы при успешной проверке скрипт завершился.
    case 100:
        console.log('Неверно')   
        break; 
    case 50:
        console.log('Верно!')   
        break;    
    default: //действие по умолчанию, если ничего не подошло.
    console.log('Не в этот раз')   
    break; 
}*/

//Циклы

//let num = 50;

/*while (num <= 55) { //пока это усл. выполняется, мы будем елать какие-то действия
    console.log(num);
    num++;
}*/

/*do { //снача заставляем цикл что-то сделать, а потом уже проверить условие и если необх. выйти из цикла
    console.log(num);
    num++;
}
while (num < 55);*/

/*for (let i = 1; i < 10; i++) { //создаем переменную,создаем условие,при кот.цикл ост.работу,создаем шаг цикла
    if (i === 6) { //если переменная i будет равна 6, 
        //break; //то цикл завершится
        continue; //позволяет пропустить ненужный шаг (6) и не прерывает полностью цикл
    }
    console.log(i);
}*/


/*const a = prompt('Один из  последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из  последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', ''); 

personalMovieDB.movies[a] = b;   
personalMovieDB.movies[c] = d;       
      //автоматизируем запись

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из  последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
    personalMovieDB.movies[a] = b;
}    */  

//Функции 

/*let num = 20; //глобальная переменная

function showFirstMessage(text) { //function declaration 
    console.log(text);
    console.log(num);
}

showFirstMessage('Hello Word!');
console.log(num);

/*function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3)); //7
console.log(calc(5, 6)); //11
console.log(calc(10, 6)); //16 */

/*function ret() {
    let num = 50; //локальная переменная
    return num;
}

const anotherNum = ret();
 console.log(anotherNum);


const logger = function() { //function expression 
    console.log('Hello');
};

logger();

const calc = (a, b) => a + b; //стрелочная функция*/

//Методы и св-ва строк и чисел

/*const str = 'teSt';

//console.log(str.[2]); //второй символ в str - s

console.log(str.toUpperCase()); //верхний регистр
console.log(str.toLowerCase()); //нижний регистр
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));*/ //c 5 cимвола начинается слово fruit

//const logg = 'Hello world';

/*console.log(logg.slice(6, 11)); //возвращаем из строки слово world (с 6 символа по 11)

const her = 'I love you, my friend!'; //можно указать только начало для вырезания и строка обрежется до конца
console.log(her.slice(12));

const b = 'Text text text test text';
console.log(b.slice(15, 19));

console.log(logg.substring(6, 11));*/ //как и slice, но нельзя указывать отриц. знач

//console.log(logg.substr(6, 5)); //второе значение (5) - это сколько нужно вырезать символов

/*const num = 12.2;
console.log(Math.round(num)); //округление до ближайшего целого (12)

const test = '12.2px';
//console.log(parseInt(test));//переводит число в др. систему исчесления, ост. только целое число (12)

console.log(parseFloat(test));*/ //возвращает дробное число, как есть (12.2)

