export function healthBar(currentHp, maxHp, barlength = 20) {
  let hpRatio = currentHp / maxHp;
  hpRatio > 0 ? hpRatio = currentHp / maxHp : hpRatio = 0;
  const filledBarLength = Math.round(hpRatio * barlength);
  const emptyBarLength = barlength - filledBarLength;
  
  const filledBar = "█".repeat(filledBarLength);
  const emptyBar = "░".repeat(emptyBarLength);

  console.log(`${filledBar}${emptyBar}`);
}