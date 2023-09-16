// EJERCICIOS DE STRINGS

// ej.1

const wordsFunction = (word) => {
  if (typeof word !== 'string') {
    console.log('Datos incorrecto');
    return;
  }

  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
};

wordsFunction('normanleyva');
wordsFunction('norman');
wordsFunction('maria');

// ej. 2

const wordsFunctionTernario = (word) => {
  if (typeof word !== 'string') {
    console.log('Datos incorrecto');
    return;
  }

  word.length > 5
    ? console.log(word.toUpperCase())
    : console.log(word.toLowerCase());
};

wordsFunctionTernario('alex');
wordsFunctionTernario('norman');

// ej. 3

const randomChar = (word) => {
  if (typeof word !== 'string') {
    console.log('Datos incorrecto');
    return;
  }

  return word.charAt(Math.floor(Math.random() * word.length));
};

randomChar('casa');

// ej. 4

const checkUpper = (string) => {
  if (typeof string !== 'string') {
    console.log('Datos incorrecto');
    return;
  }
  if (string.startsWith(string.charAt(0).toUpperCase())) {
    console.log('comienza con mayuscula');
  } else {
    console.log('comienza con minuscula');
  }
};

checkUpper('Norman');

// ej. 5

const verbs = (verb1, verb2) => {
  if (typeof verb1 !== 'string' || typeof verb2 !== 'string') {
    console.log('Uno o ambos datos introducidos no son correctos');
  } else if (verb1.endsWith('ar') && verb2.endsWith('er')) {
    console.log(
      `El verbo1 es primera conjugación y el verbo2 es segunda conjugación`
    );
  } else if (verb1.endsWith('ar') && verb2.endsWith('ar')) {
    console.log(`Los dos verbos son de primera conjugación`);
  } else if (verb1.endsWith('er') && verb2.endsWith('er')) {
    console.log(`Los dos verbos son de segunda conjugación`);
  } else {
    console.log(
      `El verbo1 es segunda conjucacion y el verbo2 es primera conjugacion`
    );
  }
};

verbs('ver', 'amarrar');
// ej. 6

const generateWordLite = (w1, w2, w3) => {
  if (
    typeof w1 !== 'string' ||
    typeof w2 !== 'string' ||
    typeof w3 !== 'string'
  ) {
    console.log('Los datos introducidos son incorrectos');
    return;
  }

  const math = (word) => {
    return (
      word.charAt(Math.random() * word.length) +
      word.charAt(Math.random() * word.length)
    );
  };

  const newWordLite = math(w1) + math(w2) + math(w3);
  console.log(newWordLite);
};

generateWordLite('hola', 'adios', 'agua');

// ej.7

const nameDomain = (mail) => {
  const arroba = mail.indexOf('@');
  const name = mail.slice(0, arroba);
  const domain = mail.slice(arroba + 1);
  console.log(`El nombre es: "${name}" y el dominio es: "${domain}`);
};

nameDomain('norman@gmail.com');

// ej. 8

const lowerUpper = (wordFive) => {
  if (typeof wordFive !== 'string') {
    console.log('Datos incorrectos');
    return;
  } else if (wordFive.length !== 5) {
    console.log('La palabra debe contener 5 carácteres');
    return;
  }

  const newWord =
    wordFive.charAt(0).toUpperCase() +
    wordFive.charAt(1).toLowerCase() +
    wordFive.charAt(2).toUpperCase() +
    wordFive.charAt(3).toLowerCase() +
    wordFive.charAt(4).toUpperCase();

  console.log(newWord);
};

lowerUpper('perro');

// ej. 9

const nickname = (name, surname) => {
  const letterName = name.slice(0, 1);
  const randomNumber = Math.floor(Math.random() * (101 - 1) + 1);
  const nickname = letterName + surname + randomNumber;
  console.log(nickname);
};

nickname('norman', 'leyva');

// ej. 10

const modify = (word) => {
  const firstLetterUpper = word.charAt(0).toUpperCase();
  console.log(firstLetterUpper);
  const lastLetterUpper = word.charAt(word.length - 1).toUpperCase();
  console.log(lastLetterUpper);
  const wordSliced = word.slice(1, word.length - 1);
  console.log(wordSliced);
  console.log(firstLetterUpper + wordSliced + lastLetterUpper);
};

modify('hola');

// ej. 11
const kebabCase = (sentence) => {
  const toLower = sentence.toLowerCase();
  const replaceWord = toLower.replaceAll(' ', '-');
  return replaceWord;
};

console.log(kebabCase('Hola Que Tal'));

//ej. 12

/*
- Crea una función que reciba una frase y cambie cada vocal por una letra aleatoria del alfabeto.
*/

const randomized = (phrase) => {
  if (typeof phrase !== 'string') {
    console.log('El dato introducido no es una cadena de texto');
    return;
  }

  const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
  console.log(alphabet.length);

  const randomNumber = alphabet.charAt(Math.floor(Math.random() * alphabet.length + 1));
  console.log(randomNumber);
  if (phrase.includes('a')) {
    phrase = phrase.replaceAll('a', randomNumber);
  }
  if (phrase.includes('A')) {
    phrase = phrase.replaceAll('A', randomNumber.toUpperCase());
  }
  if (phrase.includes('e')) {
    phrase = phrase.replaceAll('e', randomNumber);
  }
  if (phrase.includes('E')) {
    phrase = phrase.replaceAll('E', randomNumber.toUpperCase());
  }
  if (phrase.includes('i')) {
    phrase = phrase.replaceAll('i', randomNumber);
  }
  if (phrase.includes('I')) {
    phrase = phrase.replaceAll('I', randomNumber.toUpperCase());
  }
  if (phrase.includes('o')) {
    phrase = phrase.replaceAll('o', randomNumber);
  }
  if (phrase.includes('O')) {
    phrase = phrase.replaceAll('O', randomNumber.toUpperCase());
  }
  if (phrase.includes('u')) {
    phrase = phrase.replaceAll('u', randomNumber);
  }
  if (phrase.includes('U')) {
    phrase = phrase.replaceAll('U', randomNumber.toUpperCase());
  }
  return phrase;

};

const WordTest = randomized('Esto es una frase de prueba');
console.log(WordTest);
