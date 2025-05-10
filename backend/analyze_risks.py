def predict_risk(token):
    name = token.get("name", "")
    description = token.get("description", "").lower()
    volume = float(token.get("volume", 1))
    liquidity = float(token.get("liquidity", 1))

    base_score = volume / (liquidity + 1)
    if "rug" in description or "scam" in description:
        base_score *= 1.5
    return round(min(base_score, 10.0), 2)