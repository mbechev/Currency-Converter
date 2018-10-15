import Chart from 'chart.js';
import { getParameters } from './create-chart.js';
const chart = [];
const appendChart = function(rates, dates, from, to, days) {
  if (chart[days]) {
    chart[days].destroy();
  }
  const ctxL = document.getElementById(`lineChart${days}`).getContext('2d');
  chart[days] = new Chart(ctxL, getParameters(rates, dates, from, to, days));
};

export {
  appendChart,
};
