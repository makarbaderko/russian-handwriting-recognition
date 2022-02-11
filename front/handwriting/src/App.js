/* eslint-disable jsx-a11y/alt-text */
import './App.css'
import bg from './assets/bg.jpg';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import * as tf from '@tensorflow/tfjs';

const model = tf.loadGraphModel('https://raw.githubusercontent.com/makarbaderko/russian-handwriting-recognition/master/back/tfjs/model.json');
console.log(model.predict([1]))
const styles = {
  position: 'absolute',
  marginTop: '30%',
  marginLeft: '-25%'
};

const Canvas = () => {
  return (
    <ReactSketchCanvas
      style={styles}
      width="400"
      height="600"
      strokeWidth={4}
      strokeColor="red"
    />
  );
};

function App() {
  return (
    <div>
      <header>
      </header>
      <body className='body'>
        <div className='mainDiv'>
          <img className='bg' src={bg}></img>
          <p className='heading'>Draw a Cyrillic Letter</p>
          <Canvas></Canvas>
          <button className='btn'>Predict</button>
          <p className='text'>It's letter</p>
        </div>
      </body>
    </div>
  );
}

export default App;
