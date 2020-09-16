import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);
  let result;
  if (operation === '+') {
    result = firstNumber.plus(secondNumber).toString();
    return result;
  }
  if (operation === '-') {
    result = firstNumber.minus(secondNumber).toString();
    return result;
  }
  if (operation === 'X') {
    result = firstNumber.times(secondNumber).toString();
    return result;
  }
  if (operation === '÷' && secondNumber !== '0') {
    result = firstNumber.div(secondNumber).toString();
    return result;
  }
  return result;
};

export default operate;
