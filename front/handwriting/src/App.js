/* eslint-disable jsx-a11y/alt-text */
import './App.css'
import bg from './assets/bg.jpg';

function App() {
  return (
    <div>
      <header>
      </header>
      <body className='body'>
        <div className='mainDiv'>
          <img className='bg' src={bg}></img>
          <p className='test'>Draw a Cyrillic Letter</p>
        </div>
      </body>
    </div>
  );
}

export default App;
