export function simulateAI(volume: number, liquidity: number): number {
    const score = (volume * 0.6 + liquidity * 0.4) / 10000;
    return Math.min(Math.max(score, 0), 1);
}

export function getRiskLevel(score: number): string {
    if (score > 0.8) return "CRITICAL";
    if (score > 0.5) return "WARNING";
    return "SAFE";
}