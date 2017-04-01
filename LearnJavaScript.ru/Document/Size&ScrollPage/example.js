/**
 * Created by ermo4enkov on 4/1/17.
 */

// Размеры и прокрутка страницы

// document.documentElement - это и есть сама страница

// <<< Ширина/высота видимой части окна >>>

// Height - documentElement.clientHeight
// Width - documentElement.clientWidth

// <<< Ширина/высота страницы с учётом прокрутки >>>


// Из-за ошибок в брауезере получить полнусю высоту/ширину страницы невозможно.
// Поэтому прибегают вот к такому ухищрению

// var scrollHeight = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
// );

// <<< Получение текущей прокрутки >>>

// window.pageXOffset/pageYOffset



// <<< Изменение прокрутки: scrollTo, scrollBy, scrollIntoView >>>

// простое и универсальное решение – специальные методы прокрутки страницы window.scrollBy(x,y) и window.scrollTo(pageX,pageY).


// window.scrollBy(x,y) - прокручивает документ на указанное кол-во координат относительно текущего местоположения на странице

// window.scrollTo(pageX, pageY) - прокручивает документ к заданным координатам