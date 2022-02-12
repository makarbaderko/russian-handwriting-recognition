/* eslint-disable jsx-a11y/alt-text */
import './App.css'
import bg from './assets/bg.jpg';
import { ReactSketchCanvas } from 'react-sketch-canvas';

console.log("Logging....")
const spawn = require('child_process').spawn
const process = spawn('python3', ['../../back/model.py', './../back/data/v.png', '../../back/model.h5'])
process.stdout.on('data', data => {
  console.log(data.toString());
});



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
