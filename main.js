import readlineSync from "readline-sync";

const rl = readlineSync.question;

// CLASSES
class Pokemon {
  static pokedex = [];
  constructor(name, type, stats, moves, level = 50) {
    this.name = name;
    this.type = type;
    this.stats = stats;
    this.moves = moves;
    this.level = level;
    Pokemon.pokedex.push(this);
  }
  static getAllPokemon() {
    return Pokemon.pokedex;
  }
}

class Move {
  constructor(name, type, style, power, priority = 0) {
    this.name = name;
    this.type = type;
    this.style = style
    this.power = power;
    this.priority = priority;
  }
}

class Stats {
  constructor(hp, atk, def, spAtk, spDef, speed) {
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.spAtk = spAtk;
    this.spDef = spDef;
    this.speed = speed;
  }
}
// POKEMON
const charizard = new Pokemon("Charizard", ["Fire", "Flying"], new Stats(153, 104, 98, 129, 105, 120),
  [
    new Move("Flamethrower", "Fire", "Special", 90),
    new Move("Air Slash", "Flying", "Special", 75),
    new Move("Solarbeam", "Grass", "Special", 120),
    new Move("Earth Power", "Ground", "Special", 90)
  ]
);

const scizor = new Pokemon("Scizor", ["Bug", "Steel"], new Stats(145, 150, 120, 75, 100, 85),
  [
    new Move("Bullet Punch", "Steel", "Physical", 40, 1),
    new Move("X-Scissor", "Bug", "Physical", 80),
    new Move("Iron Head", "Steel", "Physical", 80),
    new Move("Dual Wingbeat", "Flying", "Physical", 80)
  ]
);

const raichu = new Pokemon("Raichu", ["Electric"], new Stats(135, 110, 75, 110, 100, 130),
  [
    new Move("Thunderbolt", "Electric", "Special", 90),
    new Move("Fake Out", "Normal", "Physical", 40, 2),
    new Move("Iron Tail", "Steel", "Physical", 100),
    new Move("Quick Attack", "Normal", "Physical", 40, 1)
  ]
);

const mewtwo = new Pokemon("Mewtwo", ["Psychic"], new Stats(181, 130, 110, 174, 110, 150),
  [
    new Move("Psychic", "Psychic", "Special", 90),
    new Move("Aura Sphere", "Fighting", "Special", 80),
    new Move("Energy Ball", "Grass", "Special", 90),
    new Move("Ice Beam", "Ice", "Special", 90)
  ]
);

const articuno = new Pokemon("Articuno", ["Flying", "Ice"], new Stats(165, 105, 120, 115, 145, 105),
  [
    new Move("Blizzard", "Ice", "Special", 110),
    new Move("Air Slash", "Flying", "Special", 75),
    new Move("Tailwind", "Flying", "Neutral", 0),
    new Move("Freeze-Dry", "Ice", "Special", 70)
  ]
);


const random = Math.random() * 0.15 + 0.85;
//                        (22 * movePower * (atk/def)) / 50 + 2
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
const myTeam = randomTeamGenerator(Pokemon.pokedex);

// Extrahiere die Namen der Pokémon
const pokemonNames = myTeam.map(pokemon => pokemon.name);

// Zeige die Namen in der Konsole an
console.log(`Your Team is: ${pokemonNames.join(", ")}`);