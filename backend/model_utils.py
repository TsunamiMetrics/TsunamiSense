def normalize_feature(value, min_value=0, max_value=100):
    if max_value - min_value == 0:
        return 0
    return (value - min_value) / (max_value - min_value)

def extract_features(token):
    return {
        "liquidity": normalize_feature(token.get("liquidity", 0), 0, 100000),
        "volume": normalize_feature(token.get("volume", 0), 0, 100000)
    }