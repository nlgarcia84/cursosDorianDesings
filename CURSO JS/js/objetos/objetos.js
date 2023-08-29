/* EJERCICIO 1 */

const numbersData = {
  numbers: [10, 32, 31, 68, 91, 24, 51, 47],
  firstFloor: {
    firstRoom: {
      // número + 2
      numbersPlus2: [],
    },
    secondRoom: {
      // número - 2
      numbersMinus2: [],
    },
  },
  secondFloor: {
    firstRoom: {
      // número * 2
      numbersDouble: [],
    },
    secondRoom: {
      // número / 2
      numbersDivided2: [],
    },
  },
  thirdFloor: {
    // sólo pares
    onlyEven: [],
    // sólo impares
    onlyOdd: [],
  },
  fourthFloor: {
    // número al cuadrado
    squareNumbers: [],
    // número al cubo
    cubeNumbers: [],
  },
  fifthFloor: {
    // número aleatorio entre 0 y number
    randomNumbers: [],
  },
  sixthFloor: {
    // Array de numbers al revés
    reversedNumbers: [],
  },
};

//
const numbers = numbersData.numbers;
//
for (const number of numbers) {
  numbersData.firstFloor.firstRoom.numbersPlus2.push(number + 2);
}
//
for (const number of numbers) {
  numbersData.firstFloor.secondRoom.numbersMinus2.push(number - 2);
}
//

for (const number of numbers) {
  numbersData.secondFloor.firstRoom.numbersDouble.push(number * 2);
}

//

for (const number of numbers) {
  numbersData.secondFloor.secondRoom.numbersDivided2.push(number / 2);
}

//

for (const number of numbers) {
  if (number % 2 === 0) {
    numbersData.thirdFloor.onlyEven.push(number);
  }
}

//

for (const number of numbers) {
  if (number % 2 !== 0) {
    numbersData.thirdFloor.onlyOdd.push(number);
  }
}

//

for (const number of numbers) {
  numbersData.fourthFloor.squareNumbers.push(Math.pow(number, 2));
}

//

for (const number of numbers) {
  numbersData.fourthFloor.cubeNumbers.push(Math.pow(number, 3));
}

//

for (const number of numbers) {
  numbersData.fifthFloor.randomNumbers.push(
    Math.floor(Math.random() * (number + 1))
  );
}

//

numbersData.sixthFloor.reversedNumbers = numbers.reverse();

//

console.log(numbersData);

/* EJERCICIO 2 */

const stringsData = {
  phrase:
    'El conocimiento es poder, pero la práctica es la clave para desbloquearlo.',
  firstFloor: {
    //Sólo vocales
    vowels: [],
  },
  secondFloor: {
    //Sólo consonantes (sin espacios, sin puntos y sin comas)
    consonants: [],
  },

  thirdFloor: {
    //El valor asciicode de cada letra
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    asciiCode: [],
  },
  fourthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: [],
  },
  fifthFloor: {
    // En este nivel codificarás la frase para que sea un secreto.
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y así sucesivamente
    // Si el caracter es un espacio u otro caracter que no sea una letra lo sustituirás por una letra random del alfabeto
    secretCode: '',
  },
};

console.log(stringsData);
//
const phrase = stringsData.phrase.toLowerCase();
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const consonants = 'bcdfghjklmnñpqrstvwxyz';

const regexVowels = /[a|e|i|o|u|á|é|í|ó|ú]/gi;
const regexConsonants = /[b|c|d|f|g|h|j|k|l|m|n||ñ|p|q|r|s|t|v|w|x|y|z]/gi;
const regexSpecial = /[' '|,|.]/g;

for (const char of phrase) {
  if (regexVowels.test(char)) {
    stringsData.firstFloor.vowels.push(char);
  } else if (!regexSpecial.test(char))
    stringsData.secondFloor.consonants.push(char);
}

for (let i = 0; i < phrase.length; i++) {
  const ascii = phrase.charCodeAt(i);
  stringsData.thirdFloor.asciiCode.push(ascii);
}

const splitedInWords = phrase.split(' ');
stringsData.fourthFloor.wordsInLowercase.push(splitedInWords);
stringsData.fourthFloor.wordsInUppercase.push(splitedInWords.join(' ').toUpperCase().split(' '))
