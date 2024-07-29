import readlineSync from "readline-sync";
import ora from 'ora';
import * as spinners from 'cli-spinners';
import * as Everything from "./index.js";

const rl = readlineSync.question;

// console.log(Pokemon.getAllPokemon());

// Get a random Team of 2 Pokemon
const myTeam = Everything.randomTeamGenerator(Everything.Pokemon.pokedex);
const enemyTeam = Everything.randomTeamGenerator(Everything.Pokemon.pokedex);

// Extrahiere die Namen der Pokémon
const pokemonNames = myTeam.map(pokemon => pokemon.name);
const enemyPokemonNames = enemyTeam.map(pokemon => pokemon.name);

// Zeige die Namen in der Konsole an
console.clear();
console.log(`Your Team is: ${pokemonNames.join(", ")}`);
 // Import the entire module

const spinner = ora({
  text: 'The enemy is choosing his team',
  spinner: spinners.dots, // Access the dots spinner from the imported module
});

spinner.start();

setTimeout(() => {
  spinner.succeed(`The enemy's team is: ${enemyPokemonNames.join(", ")}`);
}, 5000);

// console.log(`The Enemy is: ${enemyPokemonNames.join(", ")}`);