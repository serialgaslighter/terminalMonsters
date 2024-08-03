
                       // (22 * movePower * (atk/def)) / 50 + 2


export function damageCalc(yourPokemon, enemyPokemon, move, typeEffectiveness) {
  const random = Math.random() * 0.15 + 0.85;
  let effectiveness = 1;
  enemyPokemon[0].type.forEach(enemyType => {
    effectiveness *= typeEffectiveness[move.type][enemyType] || 1;
  });

  console.log("Effectiveness multiplier:", effectiveness);
  
  if (yourPokemon[0].type.includes(move.type) && move.style === "Physical") {
    const damage = Math.floor((22 * (move.power * 1.5) * (yourPokemon[0].stats.atk / enemyPokemon[0].stats.def)) / 50 + 2);
    const randomDamageRange = damage * random;
    return randomDamageRange * effectiveness;
  }

  return 0;
}