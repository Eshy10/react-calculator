import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.module.css';

const Display = ({ result }) => (
  <div className={styles.display}>
    <h6>{result}</h6>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
