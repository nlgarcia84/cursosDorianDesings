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

let word = 'arbol';
const regexVowels = /[aáeéiíoóuú]/g;

word.forEach((letter) => {
  const newWord = word.replaceAll(regexVowels, letter.toUpperCase());
  console.log(newWord);
});
