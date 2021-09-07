import './styles.css';

const divDad = document.querySelector('.row1');
function creaPoke(pokemon) {
  const newValues = pokemon;
  for (let i = 0; i < newValues.length; i += 1) {
    divDad.innerHTML += '<div class="col-4" >'
    + '<div class="card">'
      + `<img src="${newValues[i].sprites.front_default}" class="card-img-top" alt="image" />`
       + '<div class="card-body">'
          + `<h5 class="card-title">${newValues[i].name}</h5>`
          + '<p class="card-text"></p>'
          + `<button class="btn btn-primary" id="btn${i}">Comments</button>`
        + '</div>'
     + '</div>'
    + '</div>';
  }
}

async function poke() {
  const counter = 7;
  for (let i = 1; i < counter; i += 1) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then((response) => response.json())
      .then((data) => creaPoke([data]));
  }
}
poke();