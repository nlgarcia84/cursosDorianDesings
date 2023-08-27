// Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers = [6, 2, 3, 4, 5];

const multiplyFunction = (numbers) => {
  if (!Array.isArray(numbers)) {
    console.log('Los datos introducidos no son correctos');
    return;
  }
  numbers.forEach((number, index) => console.log(number * index));
};

multiplyFunction(numbers);

// Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

const dividedFunction = (numbers) => {
  if (!Array.isArray(numbers)) {
    console.log('Los datos introducidos no son correctos');
    return;
  }
  const arrayNumbers = numbers.map((number, index) =>
    Math.round(number / (index + 2))
  );
  console.log(arrayNumbers);
};
dividedFunction(numbers);

// Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.
const arrayCities = ['barcelona', 'madrid', 'zaragoza'];

const toUpperCaseFunction = (arrayCities) => {
  if (!Array.isArray(arrayCities)) {
    console.log('Los datos introducidos no son correctos');
    return;
  }
  const arrayWordsUpperCase = arrayCities.map((city) => city.toUpperCase());
  console.log(arrayWordsUpperCase);
};
toUpperCaseFunction(arrayCities);

// Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

const getArrayWords = (testArray, myLetter) => {
  if (!Array.isArray(testArray)) {
    console.log('El parámetro introducido no es correcto');
    return;
  }
  if (typeof myLetter !== 'string') {
    console.log('El parámetro introducido no es correcto');
    return;
  }

  const normalizeMyLetter = myLetter.toLowerCase();

  const arrayStart = testArray.some((elementOfTestArray) =>
    elementOfTestArray.toLowerCase().startsWith(normalizeMyLetter)
  );

  if (!arrayStart) {
    console.log('ninguna palabra coincide');
    return;
  }

  const filteredArrayStart = testArray.filter((elementOfTestArray) =>
    elementOfTestArray.toLowerCase().startsWith(normalizeMyLetter)
  );
  return filteredArrayStart;
};

console.log(getArrayWords(['manzana', 'sandia', 'melon'], 'S'));

// Añade a la función anterior que el filtro funcione independientemente de mayusculas o minúsculas.

// Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const arrayTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumarizeFunction = (arrayTen) => {
  if (!Array.isArray(arrayTen)) {
    console.log('El parámetro introducido no es correcto');
  }
  if (arrayTen.length !== 10) {
    console.log('El array introducido debe contener 10 números');
  }

  const suma = arrayTen.reduce((result, number) => {
    return (result = result + number);
  });
  return suma;
};

console.log(sumarizeFunction(arrayTen));

// Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//  "Número: 2 - Cuadrado: 4 - Cubo: 8".
const arrayPows = (arrayTen) => {
  if (!Array.isArray(arrayTen)) {
    console.log('El parámetro introducido no es correcto');
    return;
  }
  if (arrayTen.length !== 10) {
    console.log('El array introducido debe contener 10 números');
    return;
  }
  arrayTen.forEach((number) => {
    console.log(
      `Número: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(
        number,
        3
      )}`
    );
  });
};
arrayPows([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const upperVowels = (word) => {
  if (!Array.isArray(arrayTen)) {
    console.log('El parámetro introducido no es correcto');
    return;
  }
  const wordToArray = word.split('');
  const regexVowels = /[aeiouáéíóú]/i;

  const newArrayNey = wordToArray.map((letter) => {
    if (regexVowels.test(letter)) {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  });
  console.log(newArrayNey.join(''));
};
upperVowels('mariposa');

// Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const arrayOfTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = [];
const odd = [];

arrayOfTen.forEach((number) => {
  const multiplied = number * Math.floor(Math.random() * 10);
  multiplied % 2 === 0 ? even.push(number) : odd.push(number);
});
console.log(arrayOfTen, even, odd);

// Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']
const arrayWithFiveWords = ['hola', 'adios', 'gato', 'perro', 'casa'];

const newArray = arrayWithFiveWords.map((element) => {
  const newArray2 =
    element[0].toUpperCase() + element[element.length - 1].toUpperCase();
  return newArray2;
});
console.log(newArray.join('').split(''));

// Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const tenNumbers = [2, 10, 4, 1, 7, 3, 6, 7, 3, 5];

const testingFunction = (tenNumbers) => {
  tenNumbers.forEach((number) => {
    if (number > 5) {
      console.log(`${number} es mayor de 5`);
    }
  });
};

testingFunction(tenNumbers);

// Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

const fiveWordsArray = ['hola', 'adios', 'gato', 'perro', 'casa'];
const number = 4;

const arrayWithLength = fiveWordsArray.filter((word) => word.length === number);

console.log(arrayWithLength);

// Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número

const numbersArray = [20, 52, 15, 45, 10];
const numberTest = 2;

const arrayDivisor = numbersArray.filter((number) => number % numberTest === 0);

console.log(arrayDivisor);

/* Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
  const array = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 20 }
    ];
*/
const ageArray = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 },
];

const ageFunction = ageArray.filter((object) => object.age < 30);

console.log(ageFunction);

// Crea una función que reciba un array relleno con números y te diga si todos son pares o no.

const fillArray = [22, 12, 2, 52, 64, 34, 100];

const fillTest = fillArray.every((number) => number % 2 === 0);

console.log(fillTest);

// Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.

const fiveWords = ['libro', 'revista', 'ebook', 'pergamino', 'nota'];

const orderFunction = fiveWords.sort((a, b) => a.length - b.length);

console.log(orderFunction);

// Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse() 😊 (investiga la función reduceRight)

const inverseWord = (word) => {
  const stringToArray = word.split('');
  const newString = stringToArray.reduceRight((a, b) => a + b);
  return newString;
};

console.log(inverseWord('Casa'));

// ## Retos!!

// Crea una función que reciba un array de números desordenados, de forma aleatoria, unos se multiplicarán por 2 y otros se dividirán por 2, mezcla ese array de forma aleatoria y después ordenalo de menor a mayor

const unorderedArrayNumbers = [2, 6, 1, 8, 3, 5, 4, 7, 10, 9];

const testFunction = (unorderedArrayNumbers) => {};

// Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]

const fiveNumbersTwoDigits = [12, 21, 34, 23, 41];

// const prueba = [1, 2, 3, 4];

// const sumaN = prueba.reduce((result, pairN) => {
//   return (result = result + pairN);
// });

// console.log(sumaN);

// const finalFive = fiveNumbersTwoDigits.map((pairNumbers) => {
//   const sumaPair = pairNumbers.reduce((a, b) => a + b);
//   return sumaPair;
// });

// console.log(finalFive);

const asap = 1234;
const asapToString = asap.toString();
const asapToArray = asapToString.split('');
const sumarize = asapToArray.reduce((result, number) => {
  return (result = result + number);
});
console.log(sumarize);
