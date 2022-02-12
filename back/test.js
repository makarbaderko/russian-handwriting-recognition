import * as tf from '@tensorflow/tfjs';


const tfliteModel = tflite.loadTFLiteModel(
    'https://tfhub.dev/tensorflow/lite-model/mobilenet_v2_1.0_224/1/metadata/1');