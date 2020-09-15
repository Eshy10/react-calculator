import React from 'react';
import Button from '../button/Button';
import styles from './ButtonPanel.module.css';

const ButtonPanel = () => (
  <div className="button-panel">
    <div className={styles.row}>
      <Button name="AC" color={styles.color} />
      <Button name="+/-" color={styles.color} />
      <Button name="%" color={styles.color} />
      <Button name="÷" />
    </div>
    <div className={styles.row}>
      <Button name="7" color={styles.color} />
      <Button name="8" color={styles.color} />
      <Button name="9" color={styles.color} />
      <Button name="X" />
    </div>
    <div className={styles.row}>
      <Button name="4" color={styles.color} />
      <Button name="5" color={styles.color} />
      <Button name="6" color={styles.color} />
      <Button name="-" />
    </div>
    <div className={styles.row}>
      <Button name="1" color={styles.color} />
      <Button name="2" color={styles.color} />
      <Button name="3" color={styles.color} />
      <Button name="+" />
    </div>
    <div className={styles.row}>
      <Button name="0" wide color={styles.color} />
      <Button name="." color={styles.color} />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
