import tensorflow as tf
from tensorflow.keras import layers
import sys
from PIL import Image
import numpy as np
import cv2

tf.autograph.set_verbosity(0)
import logging
logging.getLogger("tensorflow").setLevel(logging.ERROR)
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 

data = sys.argv[1]
model = tf.keras.models.Sequential([
  layers.Rescaling(1./255, input_shape=(32, 32, 3)),
  layers.Conv2D(16, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Conv2D(32, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Conv2D(64, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Flatten(),
  layers.Dense(128, activation='relu'),
  layers.Dense(66)
])
model.load_weights('model.h5')
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

#print("Model setup finished")
alphabet = ["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о",
            "п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"]
alphabet = alphabet + [x.upper() for x in alphabet]


image = Image.open(data)
#print(image.mode)
image.load()
new = Image.new("RGB", image.size, (255, 255, 255))
new.paste(image, mask=image.split()[3])
#print(new.mode)
image = np.array(new)
image = cv2.resize(image, dsize=(32,32))
#print("Resize finished")
#print(image)
image = tf.expand_dims(image, axis=0)
#print("Dimensions expanded")
result = alphabet[model.predict(image).argmax()]

print(result)