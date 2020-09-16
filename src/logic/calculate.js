import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;
  const operators = ['+', '-', '÷', 'X', '%'];

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if ((buttonName === '=') && (total && next && operation)) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  } else if (operators.includes(buttonName)) {
    if (buttonName === '%') {
      if (operation && next) {
        const result = operate(total, next, operation);
        total = (result * 0.01).toString();
        next = null;
        operation = null;
      } if (next) {
        next = (next * 0.01).toString();
      }
    } else if (total && next && operation) {
      total = operate(total, next, operation);
      operation = buttonName;
      next = null;
    } else if (next && !operation) {
      total = next;
      operation = buttonName;
      next = null;
    } else {
      operation = buttonName;
    }
  } else if (buttonName === '+/-') {
    if (next !== null) {
      next = (next * -1).toString();
    } else {
      total = (total * -1).toString();
    }
  } else if ((buttonName === '=') && (next && total)) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  } else if (buttonName === '.' && next) {
    if (!next.includes('.')) {
      next += '.';
    }
  } else {
    next = buttonName;
  }
  return {
    total,
    next,
    operation,
  };
};

export default calculate;
