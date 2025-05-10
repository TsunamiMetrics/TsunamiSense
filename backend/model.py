import math

def simulate_model(features):
    score = 0.0
    weights = {"liquidity": 0.3, "volume": 0.7}
    for k, v in features.items():
        score += weights.get(k, 0) * v
    return round(math.tanh(score), 3)

def classify_risk(score):
    if score > 0.75:
        return "High"
    elif score > 0.4:
        return "Medium"
    return "Low"