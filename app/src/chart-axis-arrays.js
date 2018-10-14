const createDatesArray = (data) => {
  const datesArr = data.split('\n').map((x) => x.split(' ')).map((y) => y[0]);
  datesArr.pop();
  return datesArr;
};

const createRatesArray = (data) => {
  const ratesArr = data.split('\n').map((x) => x.split(' ')).map((y) => y[1]);
  return ratesArr;
};

export {
  createDatesArray,
  createRatesArray,
};
