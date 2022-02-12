from fastapi import FastAPI
import uvicorn
from model import run
from pydantic import BaseModel

app = FastAPI()

class Input(BaseModel):
    """
    Input features validation for the ML model
    """
    image_path: str
    model_path: str

@app.post('/predict')
def predict(json:Input):
    print("Got query")
    result = run(json.image_path)
    return result
if __name__ == '__main__':
    # Run server using given host and port
    uvicorn.run(app, host='127.0.0.1', port=80)