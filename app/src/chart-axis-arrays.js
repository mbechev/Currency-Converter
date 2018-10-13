const createDatesArray = (data) => {
  const datesArr = data.split('\n').map(x => x.split(' ')).map(y => y[0]);
  console.log(datesArr);
  return datesArr;
};

const createRatesArray = (data) => {
  const ratesArr = data.split('\n').map(x => x.split(' ')).map(y => y[1]);
  console.log(ratesArr);
  return ratesArr;
};

export {
  createDatesArray,
  createRatesArray,
};
