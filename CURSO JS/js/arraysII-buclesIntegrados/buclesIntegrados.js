// Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(number * index);
});

// Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

numbers.map((number, index) => {
  console.log(number / (index + 2));
});
