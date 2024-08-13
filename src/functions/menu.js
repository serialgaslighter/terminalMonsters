import readlineSync from "readline-sync";
import { getFinalDamage, calculateTypeEffectiveness, getBaseDamage } from "./math.js";
import { healthBar } from "./healthBar.js";
import { typeEffectiveness } from "../pokemon/types.js";

export function menuSelection(team, enemy) {
  healthBar(team[0].stats.hp, team[0].stats.maxHp);
  
  while (team.length > 0) {

    const select = readlineSync.question("[1] Attack\n[2] Team ");

    if (select === "1") {
      console.clear();

      const chooseAttack = readlineSync.question(`[1] ${team[0].moves[0].name}\n[2] ${team[0].moves[1].name}\n[3] ${team[0].moves[2].name}\n[4] ${team[0].moves[3].name}\n[0] Back `)

      if (
        chooseAttack === "1" ||
        chooseAttack === "2" ||
        chooseAttack === "3" ||
        chooseAttack === "4"
      ) {
        console.clear();
        console.log(`${team[0].name} uses ${team[0].moves[Number(chooseAttack - 1)].name}.`);
        const array0to15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        const randomIndex = Math.floor(Math.random() * array0to15.length);
        const randomDamageMultiplier = array0to15[randomIndex];
        const moveIndex = Number(chooseAttack) - 1;
        const move = team[0].moves[moveIndex];
        const effectiveness = calculateTypeEffectiveness(typeEffectiveness, move.type, enemy[0].type);
        if (effectiveness > 1) {
          console.log("It's super effective!");
        } else if (effectiveness < 1) {
          console.log("It's not very effective.");
        }
        const moveStyle = move.style;
        let attackStat;
        let defenseStat;
        if (move.style === "Physical") {
          attackStat = team[0].stats.atk;
          defenseStat = enemy[0].stats.def
        } else {
          attackStat = team[0].stats.spAtk;
          defenseStat = enemy[0].stats.spDef;
        }
        console.log(`attackStat ${attackStat}`);
        console.log(`defenseStat ${defenseStat}`);
        const baseDamage = getBaseDamage(team[0].level, move.power, attackStat, defenseStat)
        console.log(getFinalDamage(baseDamage, randomDamageMultiplier, effectiveness, false, 6144, 4096, false));
        enemy[0].stats.hp -= getFinalDamage(50, randomDamageMultiplier, effectiveness, false, 6144, 4096, false);
        console.log(enemy[0].stats.hp);
        healthBar(enemy[0].stats.hp, enemy[0].stats.maxHp);
      }
      if (chooseAttack === "0") {
        console.clear();
      }
      
    }

    if (select === "2") {
      console.clear();
      console.log(team.map(pokemon => pokemon.name));
    }

  }
}