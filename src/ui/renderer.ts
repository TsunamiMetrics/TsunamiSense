export function renderScore(score: number): void {
  const el = document.getElementById("scoreDisplay");
  if (el) el.innerText = `Tsunami Score: ${score}`;
}