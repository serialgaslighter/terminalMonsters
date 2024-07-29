import readlineSync from "readline-sync";
import * as Everything from "./index.js";

const rl = readlineSync.question;

// DAMAGE CALC
const random = Math.random() * 0.15 + 0.85;
                       // (22 * movePower * (atk/def)) / 50 + 2
const damage = Math.floor((22 * 90 * (129 / 100)) / 50 + 2);
// console.log(random);
// console.log(Math.floor(damage * random));
// console.log(Math.round(damage * random));
// console.log(Pokemon.pokedex);
// console.log(Pokemon.getAllPokemon());

// LOGIC
// Get a random Team of 2 Pokemon
function randomTeamGenerator(pokedex) {
  
  const myTeam = [];
  while (myTeam.length < 2) {
    const randomIndex = Math.floor(Math.random() * pokedex.length);

    if (!myTeam.includes(pokedex[randomIndex])) {
      myTeam.push(pokedex[randomIndex])
    }
  }
  return myTeam;
}
// console.log(randomTeamGenerator(Pokemon.pokedex));
const myTeam = randomTeamGenerator(Everything.Pokemon.pokedex);

// Extrahiere die Namen der Pokémon
const pokemonNames = myTeam.map(pokemon => pokemon.name);

// Zeige die Namen in der Konsole an
console.log(`Your Team is: ${pokemonNames.join(", ")}`);