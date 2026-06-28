import requests

PROMETHEUS_URL = "http://localhost:9090/api/v1/query?query=app_errors_total"

try:
    response = requests.get(PROMETHEUS_URL)
    data = response.json()

    if data["data"]["result"]:
        errors = float(data["data"]["result"][0]["value"][1])

        print(f"Current Error Count: {errors}")

        if errors > 5:
            print("ALERT: High error rate detected!")
        else:
            print("System Healthy")
    else:
        print("No error metrics found.")

except Exception as e:
    print(f"Error: {e}")