import { typeEffectiveness } from "../pokemon/types.js";
import { getBaseDamage, getFinalDamage, calculateTypeEffectiveness } from "./math.js";

export function enemyChooseAttack(trainerPokemon, aiPokemon) {
  
  // Check which attack does the most dmg and select it
  let bestMoveIndex = 0;
  let highestDamage = 0;

  for (let i = 0; i < aiPokemon[0].moves.length; i++) {
    let finalDamage;
    if (aiPokemon[0].moves[i].style === "Physical") {

      const effectiveness = calculateTypeEffectiveness(typeEffectiveness, aiPokemon[0].moves[i].type, trainerPokemon[0].type);
      console.log(`Effectiveness: ${effectiveness}`);
      const baseDamage = getBaseDamage(aiPokemon[0].level, aiPokemon[0].moves[i].power, aiPokemon[0].stats.atk, trainerPokemon[0].stats.def);
      finalDamage = getFinalDamage(baseDamage, 0 , effectiveness, false, 6144, 4096, false);
    } else {
      const effectiveness = calculateTypeEffectiveness(typeEffectiveness, aiPokemon[0].moves[i].type, trainerPokemon[0].type);
      console.log(`Effectiveness: ${effectiveness}`);
      const baseDamage = getBaseDamage(aiPokemon[0].level, aiPokemon[0].moves[i].power, aiPokemon[0].stats.spAtk, trainerPokemon[0].stats.spDef);
      finalDamage = getFinalDamage(baseDamage, 0, effectiveness, false, 6144, 4096, false);
    }

    if (finalDamage > highestDamage) {
      highestDamage = finalDamage;
      bestMoveIndex = i;
    }
    
  }
  return {
    move: aiPokemon[0].moves[bestMoveIndex],
    damage: highestDamage
  };
}