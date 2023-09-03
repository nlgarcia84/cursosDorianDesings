// Crea un botón en tu página HTML con el texto que quieras, añadele un evento de click que muestre en la consola su texto al hacer click.

const buttonElement = document.getElementById('button');
const textToClick = (event) => console.log(event);

buttonElement.addEventListener('click', textToClick);

// Crea un h1 con el texto "Soy un título ", al ponerte encima con el ratón, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const h1Element = document.getElementById('main-title');
const changeh1Text = (event) => {
  event.target.innerHTML = 'Quita de encima!!!';
};

h1Element.addEventListener('mouseover', changeh1Text);

// Agrega un evento que escuche el cambio de tamaño de ventana y haz que un h1 muestre el mensaje "La ventana tiene un ancho de ...px y un alto de ...px .

const h1TextSize = (event) => {
  console.dir(event);
  const width = event.target.innerWidth;
  const height = event.target.innerHeight;
  h1Element.innerHTML = `La ventana tiene un ancho de ${width} px y un alto de ${height} px`;
};

window.addEventListener('resize', h1TextSize);

// Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner "Has pulsado la tecla ...", como extra puedes poner si ha pulsado alguna combinación de teclas, alt + r, control + g, etc.

const paragraph = document.getElementById('keyboard');
const keyPress = (event) => {
  console.log(event);
  const pressedKey = event.key;
  paragraph.innerHTML = `Has pulsado la letra: ${pressedKey}`;
};


window.addEventListener('keypress', keyPress);

// Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range. Recuerda poner un mínimo y un máximo al input range. https://developer.mozilla.org/es/docs/Web/HTML/Element/input/range

const inputRange = document.getElementById('range');
const rangeValue = (event) => {
  console.log(event);
}

inputRange.addEventListener('slide', rangeValue);