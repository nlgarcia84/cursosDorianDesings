// // // // ejercicio 1

// // // function sayHello(name) {
// // //   console.log("Hola" + " " + name);
// // // }

// // const sayHello = (name) => console.log("Hola " + name);
// // console.log(sayHello("Norman"));

// // // sayHello("Norman");

// // // // ejercicio 2

// // // function calculateSquareArea(medida) {
// // //   console.log(medida ** 2);
// // // }

// // // calculateSquareArea(3);

// // const calculateSquareArea = (medida) => console.log(media * 2);

// // // // ejercicio 3

// // // function calculateTriangleArea(base, altura) {
// // //   console.log((base * altura) / 2);
// // // }

// // const calculateTriangleArea = (base, altura) =>
// //   console.log((base * altura) / 2);

// // // calculateTriangleArea(2, 3);

// // // // ejercicio 4

// // // function calculateCircleArea(radio) {
// // //   console.log(Math.PI * radio * 2);
// // // }

// // const calculateCircleArea = (radio) => console.log(Math.PI * radio * 2);
// // // calculateCircleArea(2);

// // // // ejercicio 5

// // // function celsiusToFarenheit(celsius) {
// // //   console.log(celsius * 1.8 + 32);
// // // }

// // // celsiusToFarenheit(10);

// // const celsiusToFarenheit = (celsius) => console.log(celsius * 1.8 + 32);

// // // // ejercicio 6

// // // function farenheitToCelsius(farenheit) {
// // //   console.log((farenheit - 32) / 1.8);
// // // }

// // // farenheitToCelsius(50);

// // const farenheitToCelsius = (fareheit) => console.log((farenheit - 32) / 1.8);

// // // // ejercicio 7

// // // function totalPrice(precio) {
// // //   console.log(precio * 1.21);
// // // }

// // // totalPrice(100);

// // const totalPrice = (precio) => console.log(precio * 1.21);

// // // // ejercicio 8

// // // function writeMessage(name, material, size, note) {
// // //   console.log(
// // //     name +
// // //       " " +
// // //       "ha pedido una caja de" +
// // //       " " +
// // //       material +
// // //       " " +
// // //       "de tamaño" +
// // //       " " +
// // //       size +
// // //       "." +
// // //       " " +
// // //       note
// // //   );
// // // }

// // // writeMessage("Norman", "papel para impresora", "5 kilos", "Marta");

// // const writeMessage = (name, material, size, note) => {
// //   console.log(
// //     name +
// //       " ha pedido una caja de " +
// //       material +
// //       " de tamaño " +
// //       size +
// //       ". " +
// //       note
// //   );
// // };

// // writeMessage("Norman", "papel", "dina4", "Gracias");

// // // EJERCICIOS FUNCIONES CON RETORNO

// // // EJERCICIO 1

// // // function calcularMedia(num1, num2, num3) {
// // //   const media = (num1 + num2 + num3) / 3;
// // //   return media;
// // // }

// // // const media = calcularMedia(1, 2, 3);
// // // console.log(media);

// // const calcularMedia = (n1, n2, n3) => (n1 + n2 + n3) / 3;

// // const media = calcularMedia(1, 2, 3);
// // console.log(media);

// // // EJERCICIO 2

// // // function discountPrice(price, discount) {
// // //   const discountV = discount / 100;
// // //   const finalPrice = price * (1 - discountV);
// // //   return finalPrice;
// // // }

// // // const finalPrice = discountPrice(100, 20);
// // // console.log(finalPrice);

// // const discountPrice = (price, discount) => {
// //   const discountAmount = discount / 100;
// //   const finalPrice = price * (1 - discountAmount);
// //   return finalPrice;
// // };

// // const finalPrice = discountPrice(100, 15);
// // console.log(finalPrice);

// // // EJERCICIO 3

// // // function stringFunction(palabra1, palabra2) {
// // //   const frase = palabra1 + "-" + palabra2;
// // //   return frase;
// // // }

// // // const frase = stringFunction("Hola", "Adios");
// // // console.log(frase);

// // const stringFunction = (word1, word2) => {
// //   const string = word1 + "-" + word2;
// // };

// // const string = stringFunction("Norman", "Dev");
// // console.log(string);

// // // EJERCICIO 4

// // // function kilometrosMetros(kilometros) {
// // //   const metros = kilometros * 1000;
// // //   return metros;
// // //   // return metros + " metros";
// // // }

// // // const metros = kilometrosMetros(5);
// // // console.log(metros);

// // const kmTometres = (kilometros) => {
// //   const metros = kilometros * 1000;
// //   return metros;
// // };

// // const metros = kmTometres(5);
// // console.log(metros);

// // // EJERCICIO 5

// // // function horasSegundos(horas) {
// // //   const segundos = horas * 3600;
// // //   return segundos;
// // //   // return segundos + " segundos";
// // // }

// // // const segundos = horasSegundos(1);
// // // console.log(segundos);

// // const hoursToSeconds = (hours) => {
// //   const seconds = hours * 3600;
// //   return seconds;
// // };

// // const seconds = hoursToSeconds(1);
// // console.log(seconds);

// // // EJERCICIO 6

// // // function metrosPorSegundo(metros, segundos) {
// // //   return metros / segundos;
// // // }

// // // const metrosTotales = kilometrosMetros(100);
// // // const segundosTotales = horasSegundos(1);

// // // console.log(metrosPorSegundo(metrosTotales, segundosTotales));

// // const metersPerSecond = (meters, seconds) => meters / seconds;

// // const totalMeters = kmTometres(20);
// // const totalSeconds = hoursToSeconds(1);

// // const metersPerSecondF = metersPerSecond(totalMeters, totalSeconds);

// // console.log(metersPerSecondF);

// // // conversiones explicitas de datos

// // const frase = "Hola Mundo";
// // const numero = 5;
// // const booleano = true;
// // console.log(Number(frase));
// // console.log(String(numero));
// // console.log(Number(booleano));
