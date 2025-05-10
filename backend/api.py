from fastapi import FastAPI, Request
from analyze_risks import predict_risk

app = FastAPI()

@app.post("/analyze")
async def analyze(request: Request):
    token_data = await request.json()
    result = predict_risk(token_data)
    return {"risk_score": result}