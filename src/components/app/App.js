import React, { Component } from 'react';
import Display from '../display/Display';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import styles from './App.module.css';
import calculate from '../../logic/calculate';

class App extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    const { total, next } = this.state;
    const result = total || next;
    return (
      <div className={styles.container}>
        <div className={styles.App}>
          <h1 className={styles.title}>Calculator App</h1>
          <Display result={result} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
