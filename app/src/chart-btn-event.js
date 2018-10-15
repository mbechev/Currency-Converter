import * as $ from 'jquery';
import { appendChart } from './chart-append';
import { getHistoricalData } from './chart-api-call';
import { createAxisArray } from './chart-axis-arrays';

const chartEvent = () => {
  const from = ($('#from-input').val()); // USD
  const to = ($('#to-input').val()); // BGN

  const aSyncFunction = async function(days) {
    const historicalData = await getHistoricalData(days, from, to);
    const dates = createAxisArray(historicalData, 'date');
    const rates = createAxisArray(historicalData, 'rate');
    console.log(dates);
    appendChart(rates, dates, from, to, days);
  };
  aSyncFunction(7);
  aSyncFunction(30);
};

export {
  chartEvent,
};
