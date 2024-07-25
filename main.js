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
