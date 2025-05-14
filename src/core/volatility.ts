export function interpretVolatility(volatility: number): string {
  if (volatility > 20) return `High | ${volatility.toFixed(1)}%`;
  if (volatility > 12) return `Moderate | ${volatility.toFixed(1)}%`;
  return `Low | ${volatility.toFixed(1)}%`;
}

export function calculateVolatility(volume: number, liquidity: number): number {
  const ratio = Math.abs(volume - liquidity) / (volume + 1);
  return Math.min(ratio * 100, 100);
}