import * as $ from 'jquery';
import { getParameters } from './create-chart.js';
import { getHistoricalData } from './chart-api-call';
import { createDatesArray, createRatesArray } from './chart-axis-arrays';

const chartEvent = () => {
  const from = ($('#from-input').val()); // USD
  const to = ($('#to-input').val()); // BGN

  const aSyncFunction = async function() {
    const getHistoricalObj = await getHistoricalData(31, from, to);
    const dates = createDatesArray(getHistoricalObj);
    const rates = createRatesArray(getHistoricalObj);
    rates.pop();
    getParameters(rates, dates, from, to);
  };
  aSyncFunction();
};

export {
  chartEvent,
};
