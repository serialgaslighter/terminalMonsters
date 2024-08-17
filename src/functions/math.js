export function pokeRound(n) {
  return n % 1 > 0.5 ? Math.ceil(n) : Math.floor(n);
}

export function OF16(n) {
  return n > 65535 ? n % 65536 : n;
}

export function OF32(n) {
  return n > 4294967295 ? n % 4294967296 : n;
}

export function getBaseDamage(level, basePower, attack, defense) {
  return Math.floor(
    OF32(
      Math.floor(
        OF32(OF32(Math.floor((2 * level) / 5 + 2) * basePower) * attack) / defense
      ) / 50 + 2
    )
  );
}

export function getFinalDamage(
  baseAmount,
  i,
  effectiveness,
  isBurned,
  stabMod,
  finalMod,
  protect
) {
  let damageAmount = Math.floor(OF32(baseAmount * (85 + i)) / 100);
  // If the stabMod would not accomplish anything we avoid applying it because it could cause
  // us to calculate damage overflow incorrectly (DaWoblefet)
  if (stabMod !== 4096) damageAmount = OF32(damageAmount * stabMod) / 4096;
  damageAmount = Math.floor(OF32(pokeRound(damageAmount) * effectiveness));

  if (isBurned) damageAmount = Math.floor(damageAmount / 2);
  if (protect) damageAmount = pokeRound(OF32(damageAmount * 1024) / 4096);
  return OF16(pokeRound(Math.max(1, OF32(damageAmount * finalMod) / 4096)));
}

export function calculateTypeEffectiveness(types, moveType, targetTypes) {
  let effectiveness = 1;
  targetTypes.forEach(type => {
    effectiveness *= types[moveType][type];
  });
  return effectiveness;
}