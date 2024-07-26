import readlineSync from "readline-sync";

const rl = readlineSync.question;

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

const charizard = new Pokemon("Charizard", ["Fire", "Flying"], new Stats(153, 104, 98, 129, 105, 120),
  [
    new Move("Flamethrower", "Fire", "Special", 90),
    new Move("Air Slash", "Flying", "Special", 75),
    new Move("Solarbeam", "Grass", "Special", 120),
    new Move("Earth Power", "Ground", "Special", 90)
  ]
);
// console.log(charizard);

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
// console.log(scizor);
// const pikachu = new Pokemon("Pikachu", "Electric", [35, 55, 40, 50, 50, 90], ["Thundershock", "Tail Whip", "Tackle", "Thunderwave"]);
// console.log(pikachu);
// const raichu = new Pokemon("Raichu", "Electric", [60, 90, 55, 90, 80, 110], ["Thundershock", "Tail Whip", "Tackle", "Thunderwave"]);
// console.log(raichu);
// console.log(calcAttackDmg(charizard, scizor, 50));
const random = Math.random() * 0.15 + 0.85;
//                        (22 * movePower * (atk/def)) / 50 + 2
const damage = Math.floor((22 * 90 * (129 / 100)) / 50 + 2);
// console.log(random);
// console.log(Math.floor(damage * random));
console.log(Math.round(damage * random));
// console.log(Pokemon.pokedex);
console.log(Pokemon.getAllPokemon());