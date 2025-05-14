export function tsunamiScoreAI(volume: number, liquidity: number, volatility: number): number {
  const base = (volume + liquidity) / 2;
  const volatilityPenalty = volatility * 1.7;
  const score = Math.floor((base / 1000) - volatilityPenalty);
  return Math.max(5, Math.min(score, 100));
}