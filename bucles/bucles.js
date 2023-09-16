// Crea una función que imprima los números del 1 al 10 en la consola.

const tenNumbers = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};

tenNumbers();

// Crea una función que imprima los números pares del 1 al 20 en la consola.

const pairNumbers = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

pairNumbers();

// Crea una función que imprima los números impares del 50 al 10 en la consola.

const oddNumbers = () => {
  for (let i = 50; i >= 10; i--) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

oddNumbers();

// Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const countdown = (number) => {
  if (typeof number !== 'number' || number === 0) {
    console.log('Los datos introducidos no son válidos');
    return;
  }
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
};

countdown(10);

// Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

const pairInterval = (first, second) => {
  if (typeof first !== 'number' || typeof second !== 'number') {
    console.log('Los datos introducidos no son válidos');
    return;
  }

  for (let i = first; i <= second; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

pairInterval(2, 12);

// Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

// 4 x 0 = 0
// 4 x 1 = 4
// 4 x 2 = 8
// 4 x 3 = 12
// 4 x 4 = 16
// 4 x 5 = 20
// 4 x 6 = 24
// 4 x 7 = 28
// 4 x 8 = 32
// 4 x 9 = 36
// 4 x 10 = 40

const multiplicationTable = (number) => {
  if (typeof number !== 'number' || number === 0) {
    console.log('Los datos introducidos no son válidos');
    return;
  }
  for (let i = 0; i <= 10; i++) {
    const total = number * i;
    console.log(`${number} x ${i} = ${total}`);
  }
};

multiplicationTable(4);

/*
Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

  4 x 10 = 40
  4 x 9 = 36
  4 x 8 = 32
  4 x 7 = 28
  4 x 6 = 24
  4 x 5 = 20
  4 x 4 = 16
  4 x 3 = 12
  4 x 2 = 8
  4 x 1 = 4
  4 x 0 = 0
*/

const invertedMultiplyTable = (number) => {
  if (typeof number !== 'number' || number === 0) {
    console.log('Los datos son inválidos');
    return;
  }
  for (let i = 10; i >= 0; i--) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
};

invertedMultiplyTable(4);

// Crea una función que reciba el año actual y tu edad, la función debe imprimir:

// - "naciste en el año X"
// - "En el año X cumpliste 1 año"
// - "En el año X cumpliste 2 años"
// - "En el año X cumpliste 3 años"
//   ....

const yearAge = (actualYear, myAge) => {
  if (typeof actualYear !== 'number' || typeof myAge !== 'number') {
    console.log('Los datos son inválidos');
    return;
  }
  const anoNacimiento = actualYear - myAge;
  console.log(`naciste en el año ${anoNacimiento}`);
  for (let i = anoNacimiento; i <= actualYear; i++) {
    console.log(`En el año ${i} cumpliste ${i - anoNacimiento}`);
  }
};

yearAge(2023, 39);

/* 
Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo dando una división exacta.
  - Un número par NUNCA es primo
  - TODOS los números divididos por sí mismo o por 1 dan una división exacta
*/

const prime = (number) => {
  if (typeof number !== 'number' || typeof number !== 'number') {
    console.log('Los datos son inválidos');
    return;
  }

  if (number % 2 !== 0 || number <= 1) {
    console.log(`${number} no es un número primo`);
    return;
  }

  if (number === 2) {
    console.log(`${number}  es un número primo`);
    return;
  }

  for (let i = 3; i < number; i++) {
    if (number % i === 0) {
      console.log('El número no es primo');
      return;
    }
  }
  console.log('El número es primo');
};

prime(8);

// ***** EJERCICIOS BUCLE FOR OF *****

/* Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
  "Número: 2 - Cuadrado: 4 - Cubo: 8". */

// SOLUCION CON BUCLE "FOR OF"
const squareAndCube = (array) => {
  if (!Array.isArray(array)) {
    console.log('Los datos introducidos no son correctos');
    return;
  }
  if (array.length !== 10) {
    console.log('El array debe de contener 10 valores');
    return;
  }
  for (const number of array) {
    console.log(
      `"Número: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(
        number,
        3
      )}"`
    );
  }
};

// squareAndCube([1, 2, 3]);
// SOLUCION CON BUCLE "FOR"
const squareAndCubeFor = (array) => {
  if (!Array.isArray(array)) {
    console.log('Los datos introducidos no son correctos');
    return;
  }
  if (array.length !== 10) {
    console.log('El array debe de contener 10 valores');
    return;
  }
  for (let i = 0; i <= array.length - 1; i++) {
    console.log(
      `"Número: ${array[i]} - Cuadrado: ${Math.pow(
        array[i],
        2
      )} - Cubo: ${Math.pow(array[i], 3)}"`
    );
  }
};
squareAndCubeFor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/* Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.*/

// SOLUCION CON BUCLE "FOR OF"

const upperVocals = (word) => {
  if (typeof word !== 'string') {
    console.log('Los datos introducidos no son válidos');
    return;
  }
  let wordToLowerCase = word.toLowerCase();
  let vocals = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
  for (const letter of wordToLowerCase) {
    if (vocals.includes(letter)) {
      wordToLowerCase = wordToLowerCase.replaceAll(
        letter,
        letter.toUpperCase()
      );
    }
  }
  return wordToLowerCase;
};

// console.log(upperVocals('esto es un test de prueba'));

// SOLUCION CON BUCLE "FOR"
const upperVocalsFor = (word) => {
  if (typeof word !== 'string') {
    console.log('Los datos introducidos no son válidos');
    return;
  }
  let wordToLowerCase = word.toLocaleLowerCase();
  let vocals = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
  for (let i = 0; i <= word.length - 1; i++) {
    if (vocals.includes(wordToLowerCase[i])) {
      wordToLowerCase = wordToLowerCase.replaceAll(
        wordToLowerCase[i],
        wordToLowerCase[i].toUpperCase()
      );
    }
  }
  return wordToLowerCase;
};

console.log(upperVocalsFor('Murciélago'));

/* 
Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Estoy haciendo los ejercicios de bucles en éste momento", el resultado por consola debe ser:
  La vocal "a" se repite 1 vez.
  La vocal "e" se repite 9 veces.
  La vocal "i" se repite 3 veces.
  La vocal "o" se repite 6 veces.
  La vocal "u" se repite 1 veces.
*/

// // SOLUCION CON BUCLE FOR OF
// const vocalsTest = (counter) => {
//   if (counter === 0) {
//     return 'no se repite';
//   } else if (counter === 1) {
//     return `se repite ${counter} vez`;
//   } else if (counter > 1) {
//     return `se repite ${counter} veces`;
//   }
// };

// const vocalRepeatedForOf = (string) => {
//   if (typeof string !== 'string') {
//     console.log('El parámetro introducido no es correcto');
//     return;
//   }
//   let counterA = 0;
//   let counterE = 0;
//   let counterI = 0;
//   let counterO = 0;
//   let counterU = 0;
//   for (let vocal of string.toLowerCase()) {
//     if (vocal === 'a' || vocal === 'á') {
//       counterA++;
//     } else if (vocal === 'e' || vocal === 'é') {
//       counterE++;
//     } else if (vocal === 'i' || vocal === 'í') {
//       counterI++;
//     } else if (vocal === 'o' || vocal === 'o') {
//       counterO++;
//     } else if (vocal === 'u' || vocal === 'ú') {
//       counterU++;
//     }
//   }
//   console.log(
//     `La vocal "a" ${vocalsTest(counterA)}\nLa vocal "e" ${vocalsTest(
//       counterE
//     )}\nLa vocal "i" ${vocalsTest(counterI)}\nLa vocal "o" ${vocalsTest(
//       counterO
//     )}\nLa vocal "u" ${vocalsTest(counterU)}`
//   );
// };

// vocalRepeatedForOf('esto es una frase de prueba');

// SOLUCION CON BUCLE FOR
const vocalsTest2 = (counter) => {
  if (counter === 0) {
    return 'no se repite';
  } else if (counter === 1) {
    return `se repite ${counter} vez`;
  } else if (counter > 1) {
    return `se repite ${counter} veces`;
  }
};

const vocalRepeatedFor = (string) => {
  if (typeof string !== 'string') {
    console.log('El parámetro introducido no es correcto');
    return;
  }
  let counterA = 0;
  let counterE = 0;
  let counterI = 0;
  let counterO = 0;
  let counterU = 0;
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'á') {
      counterA++;
    } else if (
      string[i].toLowerCase() === 'e' ||
      string[i].toLowerCase() === 'é'
    ) {
      counterE++;
    } else if (
      string[i].toLowerCase() === 'i' ||
      string[i].toLowerCase() === 'í'
    ) {
      counterI++;
    } else if (
      string[i].toLowerCase() === 'o' ||
      string[i].toLowerCase() === 'ó'
    ) {
      counterO++;
    } else if (
      string[i].toLowerCase() === 'u' ||
      string[i].toLowerCase() === 'ú'
    ) {
      counterU++;
    }
  }
  console.log(
    `La vocal "a" ${vocalsTest2(counterA)}\nLa vocal "e" ${vocalsTest2(
      counterE
    )}\nLa vocal "i" ${vocalsTest2(counterI)}\nLa vocal "o" ${vocalsTest2(
      counterO
    )}\nLa vocal "u" ${vocalsTest2(counterU)}`
  );
};

vocalRepeatedFor('esto es una frase de prueba');

/* 
Crea una función que reciba un array con 5 números del 1 al 10. recorrelo y en el bucle genera un número aleatorio entre 0 y el número del array que esté recorriendo en esa vuelta, la función debe decirte si el número que has generado está en el array y en qué posición ó si no está en el array.
*/

//SOLUCION CON BUCLE FOR OF
const arrayFunctionForOf = (numbers) => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro introducido es incorrecto');
  }
  if (numbers.length !== 5) {
    console.log('El array debe de tener 5 elementos');
  }
  for (let number of numbers) {
    const randomNumber = Math.floor(Math.random() * number + 1);
    console.log(randomNumber);
    const index = numbers.indexOf(randomNumber);
    if (numbers.includes(randomNumber)) {
      console.log(
        `${randomNumber} está en el array y está en la posición ${index}`
      );
    } else {
      console.log(`${randomNumber} no está en el array`);
    }
  }
};

arrayFunctionForOf([1, 2, 3, 4, 5]);

//SOLUCION CON BUCLE FOR
const arrayFunctionFor = (numbers) => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro introducido es incorrecto');
  }
  if (numbers.length !== 5) {
    console.log('El array debe de tener 5 elementos');
  }
  for (let i = 0; i <= numbers.length - 1; i++) {
    const randomNumber = Math.floor(Math.random() * numbers[i] + 1);
    console.log(randomNumber);
    const index = numbers.indexOf(randomNumber);
    if (numbers.includes(randomNumber)) {
      console.log(
        `${randomNumber} está en el array y está en la posición ${index}`
      );
    } else {
      console.log(`${randomNumber} no está en el array`);
    }
  }
};

// arrayFunctionFor([1, 2, 3, 4, 5]);

/* 
Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM" SIN USAR reverse() 😊
*/

//SOLUCION CON BUCLE FOR
const invertedWordFor = (word) => {
  if (typeof word !== 'string') {
    console.log('El parámetro introducido es incorrecto');
    return;
  }
  let wordToArray = word.split('');
  let invertedArray = [];
  for (i = wordToArray.length - 1; i >= 0; i--) {
    invertedArray.push(wordToArray[i]);
  }
  console.log(invertedArray.join(''));
};

invertedWordFor('Mariposas');

//SOLUCION CON BUCLE FOR of
// const invertedWordForOf = (word) => {
//   if (typeof word !== 'string') {
//     console.log('El parámetro introducido es incorrecto');
//     return;
//   }
//   let wordToArray = word.split('');
//   console.log(wordToArray);
//   let invertedArray = [];
//   for (let letter of word) {
//     invertedArray.unshift(letter);
//   }
//   console.log(invertedArray.join(''));
// };

// invertedWordForOf('Pajaro');

/* 
Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.
*/

// SOLUCION CON BUCLE FOR OF
const tenNumbersArrayForOf = (arrayTest) => {
  if (!Array.isArray(arrayTest)) {
    console.log('El parámetro introducido es incorrecto');
    return;
  }
  if (arrayTest.length !== 10) {
    console.log('El array debe de tener 5 elementos');
    return;
  }
  let evenArray = [];
  let oddArray = [];
  for (let element of arrayTest) {
    let randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(randomNumber);
    let randomElement = element * randomNumber;
    if (randomElement % 2 === 0) {
      evenArray.push(randomElement);
    } else {
      oddArray.push(randomElement);
    }
  }
  console.log(`${arrayTest}\n${evenArray}\n${oddArray}`);
};

tenNumbersArrayForOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// SOLUCION CON BUCLE FOR
// const tenNumbersArrayFor = (arrayTest) => {
//   if (!Array.isArray(arrayTest)) {
//     console.log('El parámetro introducido es incorrecto');
//     return;
//   }
//   if (arrayTest.length !== 10) {
//     console.log('El array debe de tener 5 elementos');
//     return;
//   }
//   let evenArray = [];
//   let oddArray = [];
//   for (let i = 0; i <= arrayTest.length - 1; i++) {
//     let randomElement = arrayTest[i] * randomNumber;
//     let randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
//     console.log(randomNumber);
//     if (randomElement % 2 === 0) {
//       evenArray.push(randomElement);
//     } else {
//       oddArray.push(randomElement);
//     }
//   }
//   console.log(`${arrayTest}\n${evenArray}\n${oddArray}`);
// };

// tenNumbersArrayFor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/* 
Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']
*/

// SOLUCION CON BUCLE FOR OF
const firstAndLastLetterForOf = (fiveWordsArray) => {
  if (!Array.isArray(fiveWordsArray)) {
    console.log('El parámetro introducido es incorrecto');
  }
  if (fiveWordsArray.length !== 5) {
    console.log('El array debe de tener 5 elementos');
  }
  let emptyArray = [];
  for (word of fiveWordsArray) {
    let firstLetter = word.charAt(0).toUpperCase();
    let lastLetter = word.charAt(word.length - 1).toUpperCase();
    emptyArray.push(firstLetter, lastLetter);
  }
  console.log(emptyArray);
};

// firstAndLastLetterForOf(['casa', 'perro', 'tarta', 'telefono', 'ordenador']);

// SOLUCION CON BUCLE FOR
const firstAndLastLetterFor = (fiveWordsArray) => {
  if (!Array.isArray(fiveWordsArray)) {
    console.log('El parámetro introducido es incorrecto');
  }
  if (fiveWordsArray.length !== 5) {
    console.log('El array debe de tener 5 elementos');
  }
  let emptyArray = [];
  for (let i = 0; i <= fiveWordsArray.length - 1; i++) {
    let firstLetter = fiveWordsArray[i][0].toUpperCase();
    let lastLetter =
      fiveWordsArray[i][fiveWordsArray[i].length - 1].toUpperCase();
    emptyArray.push(firstLetter, lastLetter);
  }
  console.log(emptyArray);
};
firstAndLastLetterFor(['casa', 'perro', 'tarta', 'telefono', 'ordenador']);
