import React from 'react';
import Display from '../display/Display';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.App}>
        <h1 className={styles.title}>React Calculator</h1>
        <Display />
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
