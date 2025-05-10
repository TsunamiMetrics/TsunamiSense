export function renderScoreBar(score: number): string {
    const width = Math.floor(score * 100);
    return `[${"#".repeat(width)}${"-".repeat(100 - width)}] ${width}%`;
}

export function displayTokenSummary(name: string, score: number): void {
    console.log(`${name}: ${renderScoreBar(score)}`);
}