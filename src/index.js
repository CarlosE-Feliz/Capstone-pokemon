import './styles.css';
import { pokeComment } from './comments.js';
import { likes, getLikes } from './likes.js';

const divDad = document.querySelector('.row1');

const creaPoke = (pokemon) => {
  const newValues = pokemon;
  newValues.forEach((element) => {
    divDad.innerHTML
      += '<div class="col-4 col" >'
      + '<div class="card">'
      + `<img src="${element.sprites.front_default}" class="card-img-top" alt="image" />`
      + '<div class="card-body">'
      + `<h5 class="card-title">${element.name}</h5>`
      + '<div class="flex text-div">'
      + `<p class="card-text text" id="like-${element.id}">🤍</p>`
      + '<p class="likes">0</p>'
      + '</div>'
      + `<button class="btn btn-primary" id="${element.id}">Comments</button>`
      + '</div>'
      + '</div>'
      + '</div>';
  });

  const hearts = document.querySelectorAll('.card-text');
  let count = 0;
  const showitem = [];
  for (let i = 0; i < hearts.length; i += 1) {
    count += 1;
    showitem.push(count);
    document.getElementById(
      'counterItems',
    ).innerHTML = `Pokemons (${showitem.length})`;
    hearts[i].addEventListener('click', (e) => {
      if (e) hearts[i].innerHTML = '❤️';
      setTimeout(() => {
        getLikes();
        hearts[i].innerHTML = '🤍';
      }, 1500);
      likes(i);
    });
  }
};
getLikes();

async function poke() {
  const counter = 34;
  for (let i = 25; i < counter; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then((response) => response.json())
      .then((data) => creaPoke([data]));
  }
}
poke();
pokeComment();
