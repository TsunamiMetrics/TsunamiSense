
function tsunamiScoreAI(volume, liquidity, volatility) {
    const base = (volume + liquidity) / 2;
    const volatilityPenalty = volatility * 1.7;
    const score = Math.floor((base / 1000) - volatilityPenalty);
    return Math.max(5, Math.min(score, 100));
}

function interpretVolatility(volatility) {
    if (volatility > 20) return `High | ${volatility.toFixed(1)}%`;
    if (volatility > 12) return `Moderate | ${volatility.toFixed(1)}%`;
    return `Low | ${volatility.toFixed(1)}%`;
}

function generateVolumeLevel() {
    return Math.floor(100000 + Math.sin(Date.now() / 50000) * 80000);
}

function generateLiquidityEstimate(volume) {
    const spread = (volume * 0.6) + (Math.cos(Date.now() / 40000) * 30000);
    return Math.floor(Math.max(spread, 20000));
}

function calculateVolatility(volume, liquidity) {
    const ratio = Math.abs(volume - liquidity) / (volume + 1);
    return Math.min(ratio * 100, 100);
}

function calculateTokenData() {
    const volume = generateVolumeLevel();
    const liquidity = generateLiquidityEstimate(volume);
    const volatility = calculateVolatility(volume, liquidity);
    const tsunamiScore = tsunamiScoreAI(volume, liquidity, volatility);

    document.getElementById('liqElement').innerHTML = liquidity;
    document.getElementById('volElement').innerHTML = volume;
    document.getElementById('volaElement').innerHTML = interpretVolatility(volatility);
    document.getElementById('scoreElement').innerHTML = tsunamiScore;
}
