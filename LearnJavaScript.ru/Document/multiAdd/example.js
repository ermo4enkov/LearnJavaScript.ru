/**
 * Created by ermo4enkov on 3/30/17.
 */

// Мультивставка: insertAdjacentHTML и DocumentFragment


// insertAdjacentHTML

// Позволяет вставлять целые куски кода

elem.insertAdjacentHTML(where, content);

// строка, которую можно вставить

// where :Куда по отношению к elem вставлять строку. Всего четыре варианта:

// 1. `beforeBegin` -- перед `elem`.
// 2. `afterBegin` -- внутрь `elem`, в самое начало.
// 3. `beforeEnd` -- внутрь `elem`, в конец.
// 4. `afterEnd` -- после `elem`.


// Document fragment

// Вставить пачку узлов единовременно поможет DocumentFragment. Это особенный кросс-браузерный DOM-объект, который похож
// на обычный DOM-узел, но им не является

var fragment = document.createDocumentFragment();
fragment.appendChild(child)



// append/prepend, before/after, replaceWith
//
// Сравнительно недавно в стандарте появились методы, которые позволяют вставить что угодно и куда угодно.
//
//     Синтаксис:
//
// node.append(...nodes) – вставляет nodes в конец node,
// node.prepend(...nodes) – вставляет nodes в начало node,
// node.after(...nodes) – вставляет nodes после узла node,
// node.before(...nodes) – вставляет nodes перед узлом node,
// node.replaceWith(...nodes) – вставляет nodes вместо node.

// Во всех этих методах nodes – DOM-узлы или строки, в любом сочетании и количестве. Причём строки вставляются именно как
// текстовые узлы, в отличие от insertAdjacentHTML.


