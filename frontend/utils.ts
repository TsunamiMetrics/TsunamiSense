export function formatScore(score: number): string {
    if (score > 0.8) return "⚠️ Critical";
    if (score > 0.5) return "⚠️ Risky";
    return "✅ Safe";
}