from model import simulate_model, classify_risk
from token_features import extract_metadata
from security_check import detect_honeypot, analyze_behaviors

def full_analysis(token_data, history):
    print("Running full analysis...")
    features = extract_metadata(token_data)
    model_score = simulate_model(features)
    risk_class = classify_risk(model_score)
    honeypot_flag = detect_honeypot(token_data)
    behavior_flag = analyze_behaviors(history)
    
    return {
        "model_score": model_score,
        "risk_classification": risk_class,
        "honeypot_detected": honeypot_flag,
        "behavioral_red_flags": behavior_flag
    }

def generate_report(result, token_id):
    print(f"Report for token: {token_id}")
    for key, value in result.items():
        print(f"{key}: {value}")