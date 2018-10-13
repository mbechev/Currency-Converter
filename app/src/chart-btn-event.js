import * as $ from 'jquery';
import {
  getParameters,
} from './create-chart.js';
import {
  getHistoricalData,
} from './chart-api-call';
import {
  createDatesArray,
  createRatesArray,
} from './chart-axis-arrays';

const chartEvent = () => {
  const from = ($('#from-input').val()); // USD
  const to = ($('#to-input').val()); // BGN

  const aSyncFunction = async function() {
    // const currencyKey = `${from}_${to}`; // BGN_USD
    const getHistoricalObj = await getHistoricalData(31, from, to);
    // const getHistoricalObj1 = await getHistoricalData(30, from, to);
    const dates = createDatesArray(getHistoricalObj);
    const rates = createRatesArray(getHistoricalObj);
    getParameters(rates, dates, from, to);
  };
  aSyncFunction();
};

export {
  chartEvent,
};
