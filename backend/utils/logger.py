import datetime

def log_event(event_type, message):
    now = datetime.datetime.now().isoformat()
    print(f"[{now}] [{event_type.upper()}]: {message}")

def log_token(token_data):
    print("Logging token data...")
    for k, v in token_data.items():
        print(f"{k}: {v}")