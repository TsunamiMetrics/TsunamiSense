def extract_metadata(token):
    features = {
        "has_website": "http" in token.get("description", ""),
        "name_length": len(token.get("name", "")),
        "liquidity_ratio": token.get("volume", 1) / (token.get("liquidity", 1) + 1)
    }
    return features