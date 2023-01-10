import requests
ticket = {
    "open": 265.0,
    "high": 265.2,
    "low": 250.5,
    "volume": 150202
}

r = requests.post("http://localhost:5000/api", json=ticket)

if r.status_code == 200:
    print(f"Success: {r.text}")
else:
    print(f"Failure: {r.text}")
