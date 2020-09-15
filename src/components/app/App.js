import React, { Component } from 'react';
import Display from '../display/Display';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import styles from './App.module.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../../logic/calculate';

class App extends Component() {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.App}>
          <h1 className={styles.title}>Calculator App</h1>
          <Display />
          <ButtonPanel />
        </div>
      </div>
    );
  }
}

export default App;
