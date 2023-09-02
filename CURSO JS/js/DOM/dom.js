// EJERCICIO 1

const h3Element = document.getElementById('start-point');

// console.dir(h3Element);

const h3id = h3Element.id;
const h3class = h3Element.classList[0];
const h3parentId = h3Element.parentElement.id;
const h3parentClass = h3Element.parentElement.classList[0];
const h2id = h3Element.previousElementSibling.id;
const h2class = h3Element.previousElementSibling.classList[0];
const h1id = h3Element.previousElementSibling.previousElementSibling.id;
const h1class =
  h3Element.previousElementSibling.previousElementSibling.classList[0];

// console.log(
//   'Soy un h3 con id ' +
//     h3id +
//     ' y la clase ' +
//     h3class +
//     '.' +
//     ' Mi padre es header con id ' +
//     h3parentId +
//     ' y clase ' +
//     h3parentClass +
//     '.' +
//     ' Mi hermano pequeño es h2 con id ' +
//     h2id +
//     ' y clase ' +
//     h2class +
//     '.' +
//     ' Mi hermano mayor es h1 con id ' +
//     h1id +
//     ' y clase ' +
//     h1class
// );

// EJERCICIO 2

// const paragraph = document.getElementById('paragraph');
// const span = document.getElementById('span');

// const paragraphTextContent = paragraph.textContent;
// const spanTextContent = span.textContent;

// paragraph.textContent = spanTextContent;
// span.textContent = paragraphTextContent;

// console.log(paragraph.textContent);
// console.log(span.textContent);

// EJERCICIO 3
const allh1Elements = document.querySelectorAll('h1');
console.log(`Hay ${allh1Elements.length} etiquetas h1`);

const allh2Elements = document.querySelectorAll('h2');
console.log(`Hay ${allh2Elements.length} etiquetas h2`);

const allh3Elements = document.querySelectorAll('h3');
console.log(`Hay ${allh3Elements.length} etiquetas h3`);

const allParagraphElements = document.querySelectorAll('p');
console.log(`Hay ${allParagraphElements.length} etiquetas p`);

const allSpanElements = document.querySelectorAll('span');
console.log(`Hay ${allSpanElements.length} etiquetas span`);

const allUlElements = document.querySelectorAll('ul');
console.log(`Hay ${allUlElements.length} etiquetas ul`);

const allLiElements = document.querySelectorAll('li');
console.log(`Hay ${allLiElements.length} etiquetas li`);

const allSectionElements = document.querySelectorAll('section');
console.log(`Hay ${allSectionElements.length} etiquetas section`);

const allArticleElements = document.querySelectorAll('article');
console.log(`Hay ${allArticleElements.length} etiquetas article`);
