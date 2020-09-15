import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ name, wide, color }) => (
  <button
    type="button"
    className={wide ? styles.wide : styles.normal}
    style={{ backgroundColor: color }}
  >
    { name }
  </button>

);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  color: '#fe9241',
};

export default Button;
