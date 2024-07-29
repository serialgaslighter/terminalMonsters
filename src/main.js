import readlineSync from "readline-sync";
import * as Everything from "./index.js";

const rl = readlineSync.question;

// Get a random Team of 2 Pokemon
const myTeam = Everything.randomTeamGenerator(Everything.Pokemon.pokedex);
const enemyTeam = Everything.randomTeamGenerator(Everything.Pokemon.pokedex);

// Extrahiere die Namen der Pokémon
const pokemonNames = myTeam.map(pokemon => pokemon.name);
const enemyPokemonNames = enemyTeam.map(pokemon => pokemon.name);

// Zeige die Namen in der Konsole an
console.clear();
// cli-spinners
Everything.spinner(pokemonNames, enemyPokemonNames);

// console.log(`The Enemy is: ${enemyPokemonNames.join(", ")}`);