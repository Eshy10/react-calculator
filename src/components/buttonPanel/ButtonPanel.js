import React from 'react';
import Button from '../button/Button';
import styles from './ButtonPanel.module.css';

const ButtonPanel = () => (
  <div className="button-panel">
    <div className={styles.row}>
      <Button name="AC" color="#dfdfdf" />
      <Button name="+/-" color="#dfdfdf" />
      <Button name="%" color="#dfdfdf" />
      <Button name="÷" />
    </div>
    <div className={styles.row}>
      <Button name="7" color="#dfdfdf" />
      <Button name="8" color="#dfdfdf" />
      <Button name="9" color="#dfdfdf" />
      <Button name="X" />
    </div>
    <div className={styles.row}>
      <Button name="4" color="#dfdfdf" />
      <Button name="5" color="#dfdfdf" />
      <Button name="6" color="#dfdfdf" />
      <Button name="-" />
    </div>
    <div className={styles.row}>
      <Button name="1" color="#dfdfdf" />
      <Button name="2" color="#dfdfdf" />
      <Button name="3" color="#dfdfdf" />
      <Button name="+" />
    </div>
    <div className={styles.row}>
      <Button name="0" wide="50%" color="#dfdfdf" />
      <Button name="." color="#dfdfdf" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
