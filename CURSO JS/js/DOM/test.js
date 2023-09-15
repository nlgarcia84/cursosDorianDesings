const buttonElement = document.getElementById('button');

const randomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 11);
  console.log(randomNumber);
};

buttonElement.addEventListener('click', randomNumber);
