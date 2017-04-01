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

