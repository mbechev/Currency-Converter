import * as $ from 'jquery';

// let from = ($('#from-input').val()); // USD
// let to = ($('#to-input').val()); // BGN
let url;
let count = 4;
const today = new Date();

// while (count--) {
//   let endDate = today.toISOString().split('T')[0];
//   today.setDate(today.getDate() - 7);
//   let startDate = today.toISOString().split('T')[0];
//   url = `https://free.currencyconverterapi.com/api/v6/convert?q=${from}_${to}&compact=ultra&date=${startDate}&endDate=${endDate}`;
//   getHistoricalRates();
// }

const chartEvent = () => {

  const from = ($('#from-input').val()); // USD
  const to = ($('#to-input').val()); // BGN
  const chartArray = [];
  const endDate = today.toISOString().split('T')[0];
  today.setDate(today.getDate() - 6);
  const startDate = today.toISOString().split('T')[0];

  url = `https://free.currencyconverterapi.com/api/v6/convert?q=${from}_${to}&compact=ultra&date=${startDate}&endDate=${endDate}`
  console.log(url);
  const getHistoricalRates = () => {
    return new Promise((resolve) => {
      $.get(url, (data) => {
        const currrencyTag = `${from}_${to}`;
        console.log(data[currrencyTag]);
        resolve(data[currrencyTag]);
      });
    });
  };

  // let convertionResult = (rate) => {
  //   return new Promise((resolve) => {
  //     let amount = $('#amount').val();
  //     let calculation = (amount * rate).toFixed(4);
  //     resolve(calculation);
  //   });
  // };

  const fillArray = (object) => {
    return new Promise((resolve) => {
      for (let key in object) {
        chartArray.push(object[key])
      };
      console.log(chartArray);
      resolve(chartArray);
    });
  };

  const aSyncFunction = async function () {
    const getHistoricalObj = await getHistoricalRates();
    const getChartArray = await fillArray(getHistoricalObj);
  };
  while (count--) {
    aSyncFunction();
  }
};


export {
  chartEvent,
};
