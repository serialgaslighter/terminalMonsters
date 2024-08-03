import * as Everything from "./index.js";

// Get a random Team of 2 Pokemon
const myTeam = Everything.randomTeamGenerator(Everything.Pokemon.pokedex);
const enemyTeam = Everything.randomTeamGenerator(Everything.Pokemon.pokedex);

// Extrahiere die Namen der Pokémon
const pokemonNames = myTeam.map(pokemon => pokemon.name);
const enemyPokemonNames = enemyTeam.map(pokemon => pokemon.name);

// Zeige die Namen in der Konsole an
console.clear();
// cli-spinners
// Everything.spinner(pokemonNames, enemyPokemonNames);
console.log(`Your team: ${pokemonNames.join(", ")}`);
console.log(`Enemy team: ${enemyPokemonNames.join(", ")}`);

console.log(`Let's go ${Everything.startBattle(pokemonNames)}!`);
console.log(`Your Opponent send out ${Everything.startBattle(enemyPokemonNames)}.`);

Everything.menuSelection(myTeam, enemyTeam);