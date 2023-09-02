// const h3Element = document.getElementById('start-point');

// console.dir(h3Element);

// const h3id = h3Element.id;
// const h3class = h3Element.classList[0];
// const h3parentId = h3Element.parentElement.id;
// const h3parentClass = h3Element.parentElement.classList[0];
// const h2id = h3Element.previousElementSibling.id;
// const h2class = h3Element.previousElementSibling.classList[0];
// const h1id = h3Element.previousElementSibling.previousElementSibling.id;
// const h1class =
//   h3Element.previousElementSibling.previousElementSibling.classList[0];

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
const paragraph = document.getElementById('paragraph');
const span = document.getElementById('span');

const paragraphTextContent = paragraph.textContent;
const spanTextContent = span.textContent;

paragraph.textContent = spanTextContent;
span.textContent = paragraphTextContent;

console.log(paragraph.textContent);
console.log(span.textContent);
