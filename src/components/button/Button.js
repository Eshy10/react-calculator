import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  name, wide, color, clickHandler,
}) => (
  <button
    onClick={() => clickHandler(name)}
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
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: false,
  color: '#fe9241',
};

export default Button;
