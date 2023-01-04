import * as React from 'react';
import './style.css';

declare global {
  interface Window {
    myTimer: any;
  }
}

export default () => {
  const [counter, setCounter] = React.useState(0);

  const startCounter = () => {
    window.myTimer = setInterval(() => {
      setCounter((v) => v + 1);
    }, 1000);
  };

  const pauseCounter = () => {
    clearTimeout(window.myTimer);
  };

  const resetCounter = () => {
    clearTimeout(window.myTimer);
    setCounter(0);
  };

  return (
    <div className="container">
      <div className="clock">
        <span>{Math.floor(counter / 60)} minutes</span>
        <span>{counter % 60} seconds</span>
      </div>
      <div className="controls">
        <button onClick={startCounter}>Start</button>
        <button onClick={pauseCounter}>Pause</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
};
