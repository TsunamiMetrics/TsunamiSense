def detect_honeypot(token):
    return token.get("sell_tax", 0) > 30 or not token.get("verified", True)

def analyze_behaviors(history):
    suspicious = 0
    for event in history:
        if "large_withdrawal" in event or "wallet_rotation" in event:
            suspicious += 1
    return suspicious > 2