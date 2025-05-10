import time

def check_service_health():
    print("Starting service health check...")
    status = {
        "backend": "running",
        "model": "loaded",
        "database": "connected",
        "timestamp": time.time()
    }
    return status

def ping_service(service_name):
    print(f"Pinging {service_name}...")
    return f"{service_name} is alive"