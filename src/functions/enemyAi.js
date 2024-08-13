import { typeEffectiveness } from "../pokemon/types.js";
import { getBaseDamage, getFinalDamage, calculateTypeEffectiveness } from "./math.js";

export function enemyChooseAttack(trainerPokemon, aiPokemon) {
  
  // Check which attack does the most dmg and select it
  let aiSelect;
  const aiDamageArray = [];

  for (let i = 0; i < aiPokemon[0].moves.length; i++) {
    if (aiPokemon[0].moves[i].style === "Physical") {

      const effectiveness = calculateTypeEffectiveness(typeEffectiveness, aiPokemon[0].moves[i].type, trainerPokemon[0].type);
      const baseDamage = getBaseDamage(aiPokemon[0].level, aiPokemon[0].moves[i].power, aiPokemon[0].stats.atk, trainerPokemon[0].stats.def);
      const finalDamage = getFinalDamage(baseDamage, 0 , effectiveness, false, 6144, 4096, false);
      aiDamageArray.push(finalDamage);
    } else {
      const effectiveness = calculateTypeEffectiveness(typeEffectiveness, aiPokemon[0].moves[i].type, trainerPokemon[0].type);
      const baseDamage = getBaseDamage(aiPokemon[0].level, aiPokemon[0].moves[i].power, aiPokemon[0].stats.spAtk, trainerPokemon[0].stats.spDef);
      const finalDamage = getFinalDamage(baseDamage, 0, effectiveness, false, 6144, 4096, false);
      aiDamageArray.push(finalDamage);
    }
    
  }
  aiSelect = Math.max(...aiDamageArray);
  return aiSelect;
}