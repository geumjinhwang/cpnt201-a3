/* selectors */
const star1 = document.querySelector('.star1');
const star2 = document.querySelector('.star2');
const star3 = document.querySelector('.star3');
const star4 = document.querySelector('.star4');
const button = document.querySelector('button');

/* toggle button action */
button.addEventListener('click', function () {
  star1.classList.toggle('vivid');
  star2.classList.toggle('vivid');
  star3.classList.toggle('vivid');
  star4.classList.toggle('vivid');
});