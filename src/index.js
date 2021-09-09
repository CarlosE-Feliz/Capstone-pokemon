import './styles.css';
import { popup, pokeComment } from './comments.js';

const divDad = document.querySelector('.row1');
function creaPoke(pokemon) {
  const newValues = pokemon;
  newValues.forEach((element) => {
    divDad.innerHTML
      += '<div class="col-4" >'
      + '<div class="card">'
      + `<img src="${element.sprites.front_default}" class="card-img-top" alt="image" />`
      + '<div class="card-body">'
      + `<h5 class="card-title">${element.name}</h5>`
      + '<div class="flex text-div">'
      + '<p class="card-text text">&#9825;</p>'
      + '<p class="likes">5</p>'
      + '</div>'
      + `<button class="btn btn-primary" id="${element.id}">Comments</button>`
      + '</div>'
      + '</div>'
      + '</div>';
  });
}

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
popup();
pokeComment();
