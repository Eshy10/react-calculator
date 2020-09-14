import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ name, wide, color }) => (
  <button
    type="button"
    className={styles.button}
    style={{ backgroundColor: color, width: wide }}
  >
    { name }
  </button>

);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  wide: '25%',
  color: '#fe9241',
};

export default Button;
