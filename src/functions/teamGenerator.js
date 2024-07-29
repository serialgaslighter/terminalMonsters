export function randomTeamGenerator(pokedex, teamType) {
  const team = [];
  
  while (team.length < 2) {
    const randomIndex = Math.floor(Math.random() * pokedex.length);

    if (!team.includes(pokedex[randomIndex])) {
      team.push(pokedex[randomIndex]);
    }
  }
  
  return team;
}
