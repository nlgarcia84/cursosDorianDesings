/* ELEMENTOS DEL DOM */
const passwordElement = document.getElementById('password');
const rangeElement = document.getElementById('range');
const pwdlengthElement = document.getElementById('pwd-length');
const buttonElement = document.getElementById('button-generate-pwd');

/* CONSTANTES Y VARIABLES */
const alLowedCharacters =
  'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890+-,!".$%&/0)=213';
let passwordString = '';

/* IDENTIFICAR FUNCIONES NECESARIAS */

// Función para el Range
const rangeValue = () => {
  pwdlengthElement.textContent = `LENGTH: ${rangeElement.value}`;
};

// Funciones para el campo del password
const randomCharacter = () => {
  const randomIndex = Math.floor(Math.random() * alLowedCharacters.length);
  return alLowedCharacters.charAt(randomIndex);
};

const pwdRandomWord = () => {
  for (let i = 0; i < rangeElement.value; i++) {
    passwordString = passwordString + randomCharacter();
  }
  return passwordString;
};

const injectTextPassword = () => {
  passwordElement.textContent = pwdRandomWord();
  return;
};

/* IDENTIFICAR EVENTOS QUE NECESITAMOS */
rangeElement.addEventListener('input', rangeValue);
buttonElement.addEventListener('click', injectTextPassword);
