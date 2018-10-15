const createAxisArray = (data, command) => {
  let arrayIndex = -1;
  if (command === 'date') {
    arrayIndex = 0;
  } else if (command === 'rate') {
    arrayIndex = 1;
  }
  const axisArray = data.split('\n')
      .map((x) => x.split(' '))
      .map((y) => y[arrayIndex]);
  axisArray.pop();
  return axisArray;
};

export {
  createAxisArray,
};
