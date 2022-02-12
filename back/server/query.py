import requests

resp = requests.post(
    "http://127.0.0.1:80/predict",
    json={"image_path":"u.png", "model_path":"model.h5"}
)

print(resp.json())