import readlineSync from "readline-sync";

export function menuSelection(team) {
  
  
  while (team.length > 0) {

    const select = readlineSync.question("[1] Attack\n[2] Team ");

    if (select === "1") {
      console.clear();
      const chooseAttack = readlineSync.question(`[1] ${team[0].moves[0].name}\n[2] ${team[0].moves[1].name}\n[3] ${team[0].moves[2].name}\n[4] ${team[0].moves[3].name}\n[0] Back `)

      if (chooseAttack === "1") {
        console.clear();
        console.log(`${team[0].name} uses ${team[0].moves[0].name}.`); 
      }
      if (chooseAttack === "2") {
        console.clear();
        console.log(`${team[0].name} uses ${team[0].moves[1].name}.`); 
      }
      if (chooseAttack === "3") {
        console.clear();
        console.log(`${team[0].name} uses ${team[0].moves[2].name}.`); 
      }
      if (chooseAttack === "4") {
        console.clear();
        console.log(`${team[0].name} uses ${team[0].moves[3].name}.`); 
      }
    }

    if (select === "2") {
      console.clear();
      console.log(team.map(pokemon => pokemon.name));
    }

  }
}