import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Button from './components/Button';
import Counter from './components/Counter';
import React from 'react';
import { useState } from 'react';

function App() {

  let [numClicks,setNumClicks] = useState(0)

  const handleClick = () => {
    numClicks = numClicks + 1
    setNumClicks(numClicks)
  }

  const restartCounter = () => {
    setNumClicks(0)
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='logo free code camp'/>
      </div>

      <div className='main-container'>
        <Counter numClicks={numClicks}/>
        <Button text="Click" isClickButton={true} handleClick={handleClick} />
        <Button text="Restart" isClickButton={false} handleClick={restartCounter} />
      </div>
    </div>
  );
}

export default App;
