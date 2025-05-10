interface TokenMetrics {
    volume: number;
    liquidity: number;
}

export function calculateHealth(metrics: TokenMetrics): number {
    const { volume, liquidity } = metrics;
    return Math.min(volume / (liquidity + 1), 1.0);
}