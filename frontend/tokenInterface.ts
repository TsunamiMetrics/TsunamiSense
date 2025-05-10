export interface TokenInfo {
    id: string;
    name: string;
    description: string;
    liquidity: number;
    volume: number;
}

export function getSampleToken(): TokenInfo {
    return {
        id: "tok123",
        name: "TestToken",
        description: "Just another meme coin",
        liquidity: 1000,
        volume: 3000
    };
}