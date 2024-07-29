export function randomTeamGenerator(pokedex) {
  
  const myTeam = [];
  while (myTeam.length < 2) {
    const randomIndex = Math.floor(Math.random() * pokedex.length);

    if (!myTeam.includes(pokedex[randomIndex])) {
      myTeam.push(pokedex[randomIndex])
    }
  }
  return myTeam;
}