// Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => console.log(number * index));

// Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

const arrayNumbers = numbers.map((number, index) => Math.floor((number / index + 2)));
console.log(arrayNumbers);

// Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const words = ['barcelona', 'madrid', 'zaragoza'];
const arrayWordsUpperCase = words.map((word) => word.toUpperCase());
console.log(arrayWordsUpperCase);

// Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

