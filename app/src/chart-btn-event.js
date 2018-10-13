import * as $ from 'jquery';
import {
  getParameters,
} from './create-chart.js';

const chartEvent = () => {
  const from = ($('#from-input').val()); // USD
  const to = ($('#to-input').val()); // BGN
  const today = new Date();
  const toDate = today.toISOString().split('T')[0];
  today.setDate(today.getDate() - 8);
  const fromDate = today.toISOString().split('T')[0];

  const URL = `https://free.currencyconverterapi.com/api/v6/convert?q=${from}_${to}&compact=ultra&date=${fromDate}&endDate=${toDate}`;
  const getHistoricalData = () => {
    return new Promise((resolve) => {
      $.get(URL, function(data) {
        resolve(data);
      });
    });
  };

  const createDatesArray = (data, key) => {
    const datesArr = Object.keys(data[key]);
    return datesArr;
  };

  const createRatesArray = (data, key) => {
    const ratesArr = Object.values(data[key]);
    return ratesArr;
  };

  const aSyncFunction = async function() {
    const currencyKey = `${from}_${to}`; // BGN_USD
    const getHistoricalObj = await getHistoricalData();
    const dates = createDatesArray(getHistoricalObj, currencyKey);
    const rates = createRatesArray(getHistoricalObj, currencyKey);
    getParameters(rates, dates, from, to);
  };
  aSyncFunction();
};

export {
  chartEvent,
};
