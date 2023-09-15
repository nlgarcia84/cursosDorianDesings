// Crea un botón en tu página HTML con el texto que quieras, añadele un evento de click que muestre en la consola su texto al hacer click.

// const buttonElement = document.getElementById('button');
// const textToClick = (event) => console.log(event);

// buttonElement.addEventListener('click', textToClick);

// Crea un h1 con el texto "Soy un título ", al ponerte encima con el ratón, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

// const h1Element = document.getElementById('main-title');
// const changeh1Text = (event) => {
//   event.target.innerHTML = 'Quita de encima!!!';
// };

// h1Element.addEventListener('mouseover', changeh1Text);

// Agrega un evento que escuche el cambio de tamaño de ventana y haz que un h1 muestre el mensaje "La ventana tiene un ancho de ...px y un alto de ...px .

// const h1TextSize = (event) => {
//   console.dir(event);
//   const width = event.target.innerWidth;
//   const height = event.target.innerHeight;
//   h1Element.innerHTML = `La ventana tiene un ancho de ${width} px y un alto de ${height} px`;
// };

// window.addEventListener('resize', h1TextSize);

// Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner "Has pulsado la tecla ...", como extra puedes poner si ha pulsado alguna combinación de teclas, alt + r, control + g, etc.

<<<<<<< HEAD
// const paragraph = document.getElementById('keyboard');
// const keyPress = (event) => {
//   console.log(event);
//   const pressedKey = event.key;
//   paragraph.innerHTML = `Has pulsado la letra: ${pressedKey}`;
// };
=======
const paragraph = document.getElementById('keyboard');
const keyPress = (event) => {
  console.log(event);
  const pressedKey = event.key;
  paragraph.innerHTML = `Has pulsado la letra: ${pressedKey}`;
};
>>>>>>> origin/main


// window.addEventListener('keypress', keyPress);

// Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range. Recuerda poner un mínimo y un máximo al input range. https://developer.mozilla.org/es/docs/Web/HTML/Element/input/range

<<<<<<< HEAD
// const rangeElement = document.getElementById('range');

// const rangeValue = () => {
//   rangeElement.previousElementSibling.textContent = rangeElement.value;
// }

// rangeElement.addEventListener('input', rangeValue);

// Crea un select con 4 opciones (la opción por defecto y otras 3) y añade un p con el texto "Seleccione una opción". Al seleccionar una opción el texto del p cambiará a "Ha seleccionado ...", si la opción selecionada es la de por defecto, el texto volverá a ser "Seleccione una opción"

// const laptopsElement = document.getElementById('laptops');

// const selectedOption = () => {
//   laptopsElement.previousElementSibling.textContent = `Ha seleccionado: ${laptopsElement.selectedOptions[0].label}`;
// }

// laptopsElement.addEventListener('change', selectedOption);

// Crea un input de tipo date y un p que diga "Selecciona una fecha", al seleccionar una fecha el p dirá la fecha en texto. Si seleccionas el 26/07/2023 el texto deberá ser "Has seleccionado el 26 de Julio de 2023"

// const dateElement = document.getElementById('date');

// const showDate = () => {
//   console.dir(dateElement.value);
//   if (dateElement.value === '2023-07-26') {
//     const date = dateElement.valueAsDate.
//       dateElement.previousElementSibling.textContent = `Has seleccionado el 26 de Julio de 2023`;
//   } else {
//     dateElement.previousElementSibling.textContent = dateElement.value;
//   }
// }


// dateElement.addEventListener('input', showDate);

// Crea un formulario para calcular descuentos, pon dos inputs de tipo number, uno para el precio y otro para el descuento, añade un botón con el texto "Calcular". Al hacer click en el botón muestra un texto que diga "El precio original es ..., aplicando un descuento del ...% el precio final es de ..."

// const priceElement = document.getElementById('price');
// const discountElement = document.getElementById('discount');
// const buttonElement = document.getElementById('button');

// const calculateResult = (ev) => {
//   ev.preventDefault();
//   const originalPrice = priceElement.value;
//   const discount = discountElement.value;
//   buttonElement.nextElementSibling.textContent = `El precio orifina es ${originalPrice}, aplicando un descuento del ${discount}%, el precio final es de ${originalPrice - ((discount * originalPrice) / 100)}`;
// }

// buttonElement.addEventListener('click', calculateResult);

// Crea dos inputs de texto que estén sincronizados, cuando escribas o borres en cualquiera de ellos en el otro también se escribirá y se borrará.

const mainTextElement = document.getElementById('mainText');
const copyTextElement = document.getElementById('copyText');

=======
const inputRange = document.getElementById('range');
const rangeValue = (event) => {
  console.log(event);
}

inputRange.addEventListener('slide', rangeValue);
>>>>>>> origin/main
