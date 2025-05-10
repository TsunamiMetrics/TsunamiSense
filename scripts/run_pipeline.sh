#!/bin/bash
echo "🚀 Running TsunamiSense pipeline..."
curl -X POST http://localhost:8000/analyze -H "Content-Type: application/json" -d '{"name": "MoonToken", "description": "Scam?", "volume": 4200, "liquidity": 900}'