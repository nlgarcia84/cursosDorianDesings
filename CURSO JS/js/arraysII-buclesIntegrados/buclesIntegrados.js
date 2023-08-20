// Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => console.log(number * index));

// Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

const arrayNumbers = numbers.map((number, index) =>
  Math.floor(number / index + 2)
);
console.log(arrayNumbers);

// Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const words = ['barcelona', 'madrid', 'zaragoza'];
const arrayWordsUpperCase = words.map((word) => word.toUpperCase());
console.log(arrayWordsUpperCase);

// Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

const letter = 'm';
const filteredArray = words.filter((word) => word.startsWith(letter));
filteredArray.length > 0
  ? console.log(filteredArray)
  : console.log('ninguna palabra coincide');

// Añade a la función anterior que el filtro funcione independientemente de mayusculas o minúsculas.

// Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const arrayTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = 0;
// arrayTen.forEach((number) => {
//   result = result + number;
// });
// console.log(result);
const suma = arrayTen.reduce((result, number) => {
  return (result = result + number);
});

console.log(suma);

// Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//  "Número: 2 - Cuadrado: 4 - Cubo: 8".

arrayTen.forEach((number) => {
  console.log(
    `Número: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(
      number,
      3
    )})`
  );
});

// Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

// let word = 'arbol';
// let wordArray = word.split('');
// const regexVowels = /[aáeéiíoóuú]/g;
// console.log(wordArray);

// wordArray.forEach((letter) => {
//   const newWord = wordArray.replaceAll(regexVowels, letter.toUpperCase());
//   return newWord;
// });

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
