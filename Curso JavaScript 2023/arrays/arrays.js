// ej. 1
/* 
- Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.
*/

const randomArrayPosition = (array) => {
  if (!Array.isArray(array)) {
    console.log('El dato introducido no es un array');
    return;
  } else if (array.length !== 5) {
    console.log('El array introducido no contiene 5 elementos');
    return;
  }
  console.log(array[Math.floor(Math.random() * array.length)]);
};

const array = [1, 2, 3, 4, 5];

randomArrayPosition(array);

// ej. 2

/*
- Crea una función que reciba un array con 3 números. La función deberá imprimir por consola. (Para el máximo y el mínimo revisa la documentación de Math https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math)

  - "La suma de todos los números es:[suma]"
  - "La media de todos los números es:[media]"
  - "El mayor es [mayor] y el menor es [menor]"
*/

const threeArray = (myThreeArray) => {
  // comprobaciones previas
  if (!Array.isArray(myThreeArray)) {
    console.log('El dato introducido no es un array');
    return;
  } else if (myThreeArray.length !== 3) {
    console.log('El array introducido no contiene 3 elementos');
    return;
  }

  // resolucion
  const suma = myThreeArray[0] + myThreeArray[1] + myThreeArray[2];
  const average = suma / myThreeArray.length;
  const biggest = Math.max(...myThreeArray);
  const smallest = Math.min(...myThreeArray);
  console.log(
    `La suma suma de todos los números es: ${suma}, la media de todos los números es: ${average}, el mayor es: ${biggest} y el menor es: ${smallest}`
  );
};

threeArray([1, 2, 3]);
// ej.3

/* - Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene. */

const fiveArray = (myFiveArray) => {
  if (!Array.isArray(myFiveArray)) {
    console.log('El dato introducido no es un array');
    return;
  } else if (myFiveArray.length !== 5) {
    console.log('El array introducido no contiene 5 elementos');
    return;
  }

  const randomNumber = Math.floor(Math.random() * 11);
  if (myFiveArray.includes(randomNumber)) {
    const positionNumber = myFiveArray.indexOf(randomNumber);
    return `El array contiene el número: ${randomNumber} y está en la posición: ${positionNumber}`;
  } else {
    return `El array no contiene el número ${randomNumber}`;
  }
};

const myFiveArray = [1, 2, 3, 4, 5];

console.log(fiveArray(myFiveArray));

// ej.4
/* - Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100. */

const hundredArray = (emptyArray) => {
  if (!Array.isArray(emptyArray)) {
    console.log('El dato introducido no es un array');
    return;
  } else if (emptyArray.length !== 0) {
    console.log('El array noestá vacio');
    return;
  }

  const ranNumber = Math.floor(Math.random() * 101);
  const ranNumber2 = Math.floor(Math.random() * 101);
  const ranNumber3 = Math.floor(Math.random() * 101);

  emptyArray.push(ranNumber, ranNumber2, ranNumber3);
  return emptyArray;
};

const emptyArray = [];
console.log(hundredArray(emptyArray));

// ej.5
/* Crea una función que reciba un array de 3 números. 
Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, 
si el resultado es par, guárdalo en el array de pares, 
si es impar, en el array de impares, 
al final, imprime el array recibido, el array de pares y el de impares por consola. */

const myNewArray = (threeNumbersArray) => {
  if (!Array.isArray(threeNumbersArray)) {
    console.log('El dato introducido no es un array');
    return;
  } else if (threeNumbersArray.length !== 3) {
    console.log('El array debe tener 3 números');
    return;
  }

  const evenArray = [];
  const oddArray = [];

  const randomNum = Math.floor(Math.random() * (10 - 2) + 1);
  console.log(randomNum);
  const threeNumbersArray2 = [
    threeNumbersArray[0] * randomNum,
    threeNumbersArray[1] * randomNum,
    threeNumbersArray[2] * randomNum,
  ];
  console.log(threeNumbersArray2);
  if (threeNumbersArray2[0] % 2 === 0) {
    evenArray.push(threeNumbersArray2[0]);
  } else {
    oddArray.push(threeNumbersArray2[0]);
  }
  if (threeNumbersArray2[1] % 2 === 0) {
    evenArray.push(threeNumbersArray2[1]);
  } else {
    oddArray.push(threeNumbersArray2[0]);
  }
  if (threeNumbersArray2[0] % 2 === 0) {
    evenArray.push(threeNumbersArray2[2]);
  } else {
    oddArray.push(threeNumbersArray2[2]);
  }
  console.log(evenArray);
  console.log(oddArray);
};

const arrayTest = [1, 2, 3];
myNewArray(arrayTest);

// ej. 6
/* Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente. */

const dniLetter = (dniNumber) => {
  if (typeof dniNumber !== 'number') {
    console.log('El dato debe ser numerico');
    return;
  } else if (String(dniNumber).length !== 8) {
    console.log('Debes de introducir 8 dígitos');
    return;
  }
  const arrayLetters = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E',
  ];
  const dniLetterPosition = dniNumber % 23;
  const dniLetterFound = arrayLetters[dniLetterPosition];
  return `El número de dni es: ${dniNumber}-${dniLetterFound}`;
};

console.log(dniLetter(43544366));
// ej. 7
/* Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O'] */

const arrayThreeWords = (arrayTesting) => {
  if (!Array.isArray(arrayTesting)) {
    console.log('El dato introducido no es un array');
    return;
  } else if (arrayTesting.length !== 3) {
    console.log('El array debe tener 3 números');
    return;
  }

  finalArray = [];
  const firstLetter = arrayTesting[0].charAt(0).toUpperCase();
  const lastLetter = arrayTesting[0]
    .charAt(arrayTesting[0].length - 1)
    .toUpperCase();

  const firstLetter2 = arrayTesting[1].charAt(0).toUpperCase();
  const lastLetter2 = arrayTesting[1]
    .charAt(arrayTesting[1].length - 1)
    .toUpperCase();

  const firstLetter3 = arrayTesting[2].charAt(0).toUpperCase();
  const lastLetter3 = arrayTesting[2]
    .charAt(arrayTesting[2].length - 1)
    .toUpperCase();

  finalArray.push(
    firstLetter,
    lastLetter,
    firstLetter2,
    lastLetter2,
    firstLetter3,
    lastLetter3
  );
  console.log(finalArray);
};

const arrayTesting = ['hola', 'adios', 'gato'];
arrayThreeWords(arrayTesting);

// ej.8
/* Crea una función que reciba una palabra y la imprima al revés.
 */

const reverseFunction = (word) => {
  if (typeof word !== 'string') {
    console.log('El dato introducido debe ser texto');
    return;
  }
  const stringToArray = word.split('');
  const reverseArray = stringToArray.reverse();
  const arrayToString = reverseArray.join('');
  return arrayToString;
};

console.log(reverseFunction('hola'));

// ej.9
/* Crea una función que reciba un array con tres nombres y otro array con tres números, la función deberá imprimir un array con los nombres y los números fusionados. Ejemplo. ['Pepe', 'Marta', 'Javier'] y [23,14,50] en consola deberá salir ['Pepe23', 'Marta14', 'Javier50'] */

const nameNumbers = (arrayNames, arrayNumbers) => {
  if (!Array.isArray(arrayNames) || !Array.isArray(arrayNumbers)) {
    console.log('El dato introducido no es un array');
    return;
  } else if (arrayNames.length !== 3 || arrayNumbers.length !== 3) {
    console.log('El tamaño de las arrays debe de ser de 3');
    return;
  }

  const finalAr = [];
  const elementOne = arrayNames[0] + arrayNumbers[0];
  const elementTwo = arrayNames[1] + arrayNumbers[1];
  const elementThree = arrayNames[2] + arrayNumbers[2];
  finalAr.push(elementOne, elementTwo, elementThree);
  console.log(finalAr);
};

nameNumbers(['norman', 'roberto', 'maria'], [15, 20, 30]);

// ej. 10
/* Crea una función que reciba un array con tres números. La función deberá imprimir un nuevo array que contenga los cuadrados de los números que le has enviado. */

const squareFunction = (array) => {
  if (!Array.isArray(array)) {
    console.log('El dato introducido no es un array');
    return;
  } else if (array.length !== 3) {
    console.log('El tamaño de las arrays debe de ser de 3');
    return;
  }
  const sqFunction = [];
  const sqElement1 = Math.pow(array[0], 2);
  const sqElement2 = Math.pow(array[1], 2);
  const sqElement3 = Math.pow(array[2], 2);
  sqFunction.push(sqElement1, sqElement2, sqElement3);
  return sqFunction;
};

console.log(squareFunction([1, 2, 3]));

// ej. 11
/* Crea una función que reciba un array con tres nombres y sólo imprima los que empiecen por "A" */

const startA = (array) => {
  if (!Array.isArray(array)) {
    console.log('El dato introducido no es un array');
    return;
  } else if (array.length !== 3) {
    console.log('El tamaño de las arrays debe de ser de 3');
    return;
  }
  const arrayStartA = [];
  if (array[0].startsWith('A')) {
    arrayStartA.push(array[0]);
  }
  if (array[1].startsWith('A')) {
    arrayStartA.push(array[1]);
  }
  if (array[2].startsWith('A')) {
    arrayStartA.push(array[2]);
  }
  if (arrayStartA.length === 0) {
    console.log('No hay nombres que empiecen por "A"');
    return;
  }
  console.log(arrayStartA);
};

startA(['Toni', 'Ana', 'Marta']);

// ej. 12
/* Crea una función que reciba un array de 4 números y que lo imprima en orden inverso, pero SIN USAR reverse() */
const fourNumbersArray = (array) => {
  if (!Array.isArray(array)) {
    console.log('El dato introducido no es un array');
    return;
  } else if (array.length !== 4) {
    console.log('El tamaño de las arrays debe de ser de 4');
    return;
  }
  const invertedArray = [];
  invertedArray.push(array[3], array[2], array[1], array[0]);
  console.log(invertedArray);
};

fourNumbersArray([1, 2, 3, 4]);
