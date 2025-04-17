
document.addEventListener("DOMContentLoaded", function () {
    const exampleBtn = document.getElementById('exampleBtn');
    const backBtn = document.getElementById('backBtn');
    const liqElement = document.getElementById('liq');
    const volElement = document.getElementById('vol');
    const volaElement = document.getElementById('vola');
    const scoreElement = document.getElementById('score');
    const userTokenInput = document.getElementById('userTokenInput');

    // Get the token entered by the user from localStorage
    const userToken = localStorage.getItem("selectedToken");

    // Display the user token on the second screen
    userTokenInput.innerHTML = userToken;

    // Function to calculate Tsunami Score with AI adjustments
    function tsunamiScoreAI(volume, liquidity, volatility) {
        const base = (volume + liquidity) / 2;
        const volatilityPenalty = volatility * 1.7;
        const score = Math.floor((base / 1000) - volatilityPenalty);
        return Math.max(5, Math.min(score, 100));
    }

    // Function to interpret volatility into readable labels
    function interpretVolatility(volatility) {
        if (volatility > 20) return `High | ${volatility.toFixed(1)}%`;
        if (volatility > 12) return `Moderate | ${volatility.toFixed(1)}%`;
        return `Low | ${volatility.toFixed(1)}%`;
    }

    // Simulate token volume with time-based fluctuation
    function generateVolumeLevel() {
        return Math.floor(100000 + Math.sin(Date.now() / 50000) * 80000);
    }

    // Estimate liquidity based on volume with additional fluctuations
    function generateLiquidityEstimate(volume) {
        const spread = (volume * 0.6) + (Math.cos(Date.now() / 40000) * 30000);
        return Math.floor(Math.max(spread, 20000));
    }

    // Calculate volatility based on the ratio of volume to liquidity
    function calculateVolatility(volume, liquidity) {
        const ratio = Math.abs(volume - liquidity) / (volume + 1);
        return Math.min(ratio * 100, 100);
    }

    // Generate token data based on formulas
    function calculateTokenData() {
        const volume = generateVolumeLevel();
        const liquidity = generateLiquidityEstimate(volume);
        const volatility = calculateVolatility(volume, liquidity);
        const tsunamiScore = tsunamiScoreAI(volume, liquidity, volatility);

        // Display the calculated values
        liqElement.innerHTML = liquidity;
        volElement.innerHTML = volume;
        volaElement.innerHTML = interpretVolatility(volatility);
        scoreElement.innerHTML = tsunamiScore;
    }

    // Call the function to calculate and display the data
    calculateTokenData();

    if (exampleBtn) {
        exampleBtn.addEventListener('click', function() {
            window.location.href = 'third_screen.html';
        });
    }

    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = 'popup.html';
        });
    }
});
