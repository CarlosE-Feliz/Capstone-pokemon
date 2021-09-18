import './commentsStyle.css';
import { postApiComent, getApiComent } from './apicoment.js';

const popup = async (data) => {
  const newData = data;
  document.getElementById('body').addEventListener('click', (e) => {
    newData.forEach((element) => {
      // eslint-disable-next-line eqeqeq
      if (e.target.id == element.id) {
        const popupDiv = document.createElement('div');
        const commentDiv = document.createElement('div');
        popupDiv.id = 'overlay-popup';
        commentDiv.id = 'overlay-project';
        commentDiv.style.display = 'flex';
        commentDiv.innerHTML = `<div class="cardItem">
        <button type="button" class="btn-close" aria-label="Close" id="cancel-button"></button>
        <h4 class="cardTitle">${element.name}</h4>
         <img src="${element.sprites.front_default}" class="cardImg" alt="image" />
         <div class="card-body info">
         <ul class="ul-popup">
            <li class="abilities"> Abilities: ${element.abilities[0].ability.name}, ${element.abilities[1].ability.name}</li>
         </ul>
         <ul class="ul-popup">
            <li class="moves"> Moves: ${element.moves[0].move.name}, ${element.moves[1].move.name}</li>
         </ul>
         </div>
         <h4 id="commentTitle">Comments(0)</h4>
         <div id="comments">
         <ul id="ulComment"></ul>
         </div>
         <div class="mb-3">
         <input type="text" class="form-control" id="fromName" placeholder="Name">
         </div>
         <div class="mb-3">
         <textarea class="form-control" id="fromTextArea" placeholder="Comment" rows="3"></textarea>
         </div> 
         <div class="col-auto">
         <button type="submit" class="btn btn-primary mb-3" id="sendBttn">Submmit</button>
         </div>
         </div>
         </div>
         `;
        popupDiv.appendChild(commentDiv);
        getApiComent(element.id);
        commentDiv.style.display = 'flex';
        document.getElementById('body').appendChild(popupDiv);
        const cancelBttn = document.querySelector('#cancel-button');
        cancelBttn.addEventListener('click', () => {
          commentDiv.remove();
          popupDiv.remove();
        });
        const btn = document.getElementById('sendBttn');
        btn.addEventListener('click', (e) => {
          // eslint-disable-next-line prefer-destructuring
          const id = element.id;
          e.preventDefault();
          const name = document.getElementById('fromName');
          const areaT = document.getElementById('fromTextArea');
          postApiComent(id, name.value, areaT.value)
            .then(() => getApiComent(id));
        });
      }
    });
  });
};

async function pokeComment() {
  const counter = 34;
  for (let i = 25; i < counter; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then((response) => response.json())
      .then((data) => popup([data]));
  }
}

export { popup, pokeComment };
