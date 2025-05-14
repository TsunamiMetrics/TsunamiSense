export function generateVolumeLevel(): number {
  return Math.floor(100000 + Math.sin(Date.now() / 50000) * 80000);
}

export function generateLiquidityEstimate(volume: number): number {
  const spread = (volume * 0.6) + (Math.cos(Date.now() / 40000) * 30000);
  return Math.floor(Math.max(spread, 20000));
}