import './styles.css';
// Bulbasaur, chamander, squirtle, pikachu, diglett, tentacruel
const API_KEY = 'https://pokeapi.co/api/v2/pokemon?limit=6';

const poke = async () => {
  await fetch(API_KEY, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

poke();