import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);
  let result = 0;

  if (operation === '+') {
    result = firstNumber.plus(secondNumber);
  } else if (operation === '-') {
    result = firstNumber.minus(secondNumber);
  } else if (operation === '-') {
    result = firstNumber.minus(secondNumber);
  } else if (operation === 'x') {
    result = firstNumber.times(secondNumber);
  } else if (operation === '÷') {
    result = firstNumber.div(secondNumber);
  } else if (operation === '%') {
    result = firstNumber.mod(secondNumber);
  }

  return result;
};

export default operate;
