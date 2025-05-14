import { tsunamiScoreAI } from "./core/tsunamiScore";
import { generateVolumeLevel, generateLiquidityEstimate } from "./core/volume";
import { calculateVolatility } from "./core/volatility";
import { renderScore } from "./ui/renderer";

function simulateAnalysis() {
  const volume = generateVolumeLevel();
  const liquidity = generateLiquidityEstimate(volume);
  const volatility = calculateVolatility(volume, liquidity);
  const score = tsunamiScoreAI(volume, liquidity, volatility);
  renderScore(score);
}

window.addEventListener("load", () => {
  simulateAnalysis();
  setInterval(simulateAnalysis, 10000);
});