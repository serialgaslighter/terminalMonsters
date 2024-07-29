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
// console.log(Pokemon.getAllPokemon());

// LOGIC
// Get a random Team of 2 Pokemon
const myTeam = Everything.randomTeamGenerator(Everything.Pokemon.pokedex);

// Extrahiere die Namen der Pokémon
const pokemonNames = myTeam.map(pokemon => pokemon.name);

// Zeige die Namen in der Konsole an
console.log(`Your Team is: ${pokemonNames.join(", ")}`);