class Pokemon {
  constructor(name, type, stats, moves, level = 50) {
    this.name = name;
    this.type = type;
    this.stats = stats;
    this.moves = moves;
    this.level = level;
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
