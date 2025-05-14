export function drawWave(canvasId: string): void {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  for (let x = 0; x < canvas.width; x++) {
    const y = 50 * Math.sin((x + Date.now() / 100) * 0.01) + canvas.height / 2;
    ctx.lineTo(x, y);
  }
  ctx.stroke();
}