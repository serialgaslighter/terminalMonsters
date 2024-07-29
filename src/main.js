import readlineSync from "readline-sync";
import * as Everything from "./index.js";

const rl = readlineSync.question;

// console.log(Pokemon.getAllPokemon());

// Get a random Team of 2 Pokemon
const myTeam = Everything.randomTeamGenerator(Everything.Pokemon.pokedex, 'myTeam');
const enemyTeam = Everything.randomTeamGenerator(Everything.Pokemon.pokedex, 'enemyTeam');
// Extrahiere die Namen der Pokémon
const pokemonNames = myTeam.map(pokemon => pokemon.name);
const enemyPokemonNames = enemyTeam.map(pokemon => pokemon.name);

// Zeige die Namen in der Konsole an
console.log(`Your Team is: ${pokemonNames.join(", ")}`);
console.log(`The Enemy is: ${enemyPokemonNames.join(", ")}`);