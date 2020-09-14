import React from 'react';
import Display from '../display/Display';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <h1>React Calculator</h1>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
