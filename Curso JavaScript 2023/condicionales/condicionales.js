// // EJERCICIO 1

// const saluteFunction = (name, age) => {
//   if (typeof name !== 'string' || typeof age !== 'number') {
//     console.log('Los datos no son válidos');
//     return;
//   }

//   if (age >= 18) {
//     console.log('Hola ' + name + ' eres mayor de edad');
//   } else {
//     console.log('Hola ' + name + ' eres menor de edad');
//   }
// };

// saluteFunction('Norman', 30);

// // EJERCICIO 2

// const numbers = (num1, num2) => {
//   if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//     console.log('Datos inválidos');
//     return;
//   }

//   if (num1 > num2) {
//     console.log(num1 + ' es mayor que ' + num2);
//   } else if (num2 > num1) {
//     console.log(num2 + ' es mayor que ' + num1);
//   } else {
//     console.log(num1 + ' es igual a ' + num2);
//   }
// };

// numbers(2, 5);

// // EJERCICIO 3

// const checkNumbers = (number) => {
//   if (typeof number !== 'number') {
//     console.log('Datos erroneos');
//     return;
//   }
//   if (number === 0) {
//     console.log(number + ' es cero.');
//   } else if (number > 0) {
//     console.log(number + ' es positivo.');
//   } else {
//     console.log(number + ' es negativo.');
//   }
// };

// checkNumbers(-1);

// // EJERCICIO 4

// const scores = (s1, s2, s3) => {
//   const average = (s1 + s2 + s3) / 3;
//   if (
//     typeof s1 !== 'number' ||
//     typeof s2 !== 'number' ||
//     typeof s3 !== 'number'
//   ) {
//     console.log('Datos erroneos');
//     return;
//   }
//   if (average >= 0 && average < 5) {
//     console.log('Suspenso');
//   } else if (average >= 5 && average < 8) {
//     console.log('Aprobado');
//   } else if (average >= 8) {
//     console.log('Matrícula de honor');
//   }
// };

// scores(1, 10, 10);

// // EJERCICIO 5
// const mayor = (num1, num2, num3) => {
//   if (
//     typeof num1 !== 'number' ||
//     typeof num2 !== 'number' ||
//     typeof num3 !== 'number'
//   ) {
//     console.log('Datos incorrectos');
//     return;
//   }
//   if (num1 > num2 && num1 > num3) {
//     return num1;
//   } else if (num2 > num1 && num2 > num3) {
//     return num2;
//   } else {
//     return num3;
//   }
// };

// console.log(mayor(8, 232, 13));

// // EJERCICIO 6
// const divisible = (numeroEntero) => {
//   if (typeof numeroEntero !== 'number') {
//     console.log('Datos errorneos');
//     return;
//   }
//   if (numeroEntero % 3 === 0 && numeroEntero % 5 === 0) {
//     return 'es divisible por 3 y por 5';
//   } else if (numeroEntero % 3 === 0) {
//     return 'es divisible por 3';
//   } else if (numeroEntero % 5 === 0) {
//     return 'es divisible por 5';
//   } else {
//     return numeroEntero;
//   }
// };

// console.log(divisible(5));

// // EJERCICIO 7
// const pairInpair = (number) => {
//   if (typeof number !== 'number') {
//     console.log('Datos incorrectos');
//     return;
//   }
//   if (number % 2 === 0) {
//     console.log(number + ' es un número par');
//   } else if (number % 2 !== 0) {
//     console.log(number + ' es un número impar');
//   } else {
//     console.log(number + ' es cero');
//   }
// };

// pairInpair(2);
// pairInpair(7);

// // EJERCICIO 8
// const yearB = (year) => {
//   if (typeof year !== 'number') {
//     console.log('Los datos introducidos son incorrectos');
//     return;
//   }
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log('Es un año bisiesto');
//   } else {
//     console.log('No es un año bisiesto');
//   }
// };

// yearB(2023);
// //EJERCICIO 9

// const sumar = (valor1, valor2) => {
//   if (
//     (typeof valor1 !== 'number' && typeof valor1 !== 'string') ||
//     (typeof valor2 !== 'number' && typeof valor2 !== 'string')
//   ) {
//     console.log('El tipo de dato introducido no es correcto');
//     return;
//   }

//   if (typeof valor1 === 'string') {
//     valor1 = Number(valor1);
//   }
//   if (typeof valor2 === 'string') {
//     valor2 = Number(valor2);
//   }
//   const suma = valor1 + valor2;
//   console.log(suma);
// };

// sumar(true, '2');

// // ejercicio ternarios

// const number = 23;

// // if (number % 2 === 0) {
// //   console.log("numer es par");
// // } else {
// //   console.log("number es impar");
// // }

// number % 2 === 0 ? console.log('Es par') : console.log('Es impar');

// const numbersFunction = (n1, n2, n3) => {
//   if (n1 === n2 && n1 === n3) {
//     console.log('todos los numeros son iguales');
//     return;
//   }

//   const greatestNumber = Math.max(n1, n2, n3);

//   let repeatNumber = null;

//   if (n1 === n2 || n1 === n3) {
//     repeatNumber = n1;
//   } else if (n2 === n3) {
//     repeatNumber = n2;
//   }

//   if (!repeatNumber) {
//     console.log('El número más grande es ' + greatestNumber);
//   } else if (repeatNumber >= greatestNumber) {
//     console.log('El número más grande es ' + repeatNumber + ' y está repetido');
//   } else {
//     console.log(
//       'El número más grande es ' +
//         greatestNumber +
//         ' y el ' +
//         repeatNumber +
//         ' está repetido'
//     );
//   }
// };

// // GENERAR NUMERO ALEATORIO

// const generateRandomNumberBetween = (min, max) => {
//   return Math.round(Math.random() * (max - (min + 1)) + min);
// };

// console.log(generateRandomNumberBetween(2, 8));

// // strings

// const name = 'Norman';
// const age = 39;

// // console.log(
// //   'Mi nombre es ' +
// //     name +
// //     ', tengo ' +
// //     age +
// //     ' años y el año que viene tendré ' +
// //     (age + 1) +
// //     ' años.'
// // );

// console.log(
//   `Mi nombre es ${name}, tengo ${age} años y el año que viene tendré ${age + 1}`
// );
