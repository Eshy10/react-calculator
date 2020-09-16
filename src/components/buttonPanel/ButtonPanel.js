import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import styles from './ButtonPanel.module.css';

const ButtonPanel = ({ clickHandler }) => (
  <div className="button-panel">
    <div className={styles.row}>
      <Button clickHandler={clickHandler} name="AC" color={styles.color} />
      <Button clickHandler={clickHandler} name="+/-" color={styles.color} />
      <Button clickHandler={clickHandler} name="%" color={styles.color} />
      <Button clickHandler={clickHandler} name="÷" />
    </div>
    <div className={styles.row}>
      <Button clickHandler={clickHandler} name="7" color={styles.color} />
      <Button clickHandler={clickHandler} name="8" color={styles.color} />
      <Button clickHandler={clickHandler} name="9" color={styles.color} />
      <Button clickHandler={clickHandler} name="x" />
    </div>
    <div className={styles.row}>
      <Button clickHandler={clickHandler} name="4" color={styles.color} />
      <Button clickHandler={clickHandler} name="5" color={styles.color} />
      <Button clickHandler={clickHandler} name="6" color={styles.color} />
      <Button clickHandler={clickHandler} name="-" />
    </div>
    <div className={styles.row}>
      <Button clickHandler={clickHandler} name="1" color={styles.color} />
      <Button clickHandler={clickHandler} name="2" color={styles.color} />
      <Button clickHandler={clickHandler} name="3" color={styles.color} />
      <Button clickHandler={clickHandler} name="+" />
    </div>
    <div className={styles.row}>
      <Button clickHandler={clickHandler} name="0" wide color={styles.color} />
      <Button clickHandler={clickHandler} name="." color={styles.color} />
      <Button clickHandler={clickHandler} name="=" />
    </div>
  </div>
);

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
