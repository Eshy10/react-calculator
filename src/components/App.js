import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
