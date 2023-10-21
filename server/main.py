from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
import cv2

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL = tf.keras.models.load_model("./DenseNet.h5")

CLASS_NAMES = ["Normal", "Stroke"]


@app.get("/ping")
async def ping():
    return "Hello, I am alive"


def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image


@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    resized_image = cv2.resize(image, (224, 224))
    color_image = cv2.cvtColor(resized_image, cv2.COLOR_GRAY2BGR)
    img_batch = np.expand_dims(color_image, 0)

    predictions = MODEL.predict(img_batch)

    predicted_class = CLASS_NAMES[1] if predictions[0] >= 0.5 else CLASS_NAMES[0]
    confidence = round(
        100 * (predictions[0][0] if predictions[0] >= 0.5 else 1 - predictions[0][0]), 2)
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8008)
