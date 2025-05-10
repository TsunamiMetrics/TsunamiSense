interface TokenData {
    name: string;
    description: string;
    liquidity: number;
    volume: number;
}

function analyzeToken(data: TokenData): string {
    const score = (data.volume / data.liquidity) * (data.description.includes("rug") ? 0.5 : 1.2);
    return score > 1 ? "⚠️ High Risk" : "✅ Safe";
}

const sampleToken: TokenData = {
    name: "ShadyToken",
    description: "Looks like a potential rug pull...",
    liquidity: 1200,
    volume: 5000
};

const output = document.getElementById("output");
if (output) {
    output.innerText = analyzeToken(sampleToken);
}