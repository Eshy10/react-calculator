const calculate = (name, ...data) => {
  const dataObject = data;
  if (name === '+/-') {
    dataObject.total *= -1;
    dataObject.next *= -1;
  }
};

export default calculate;
