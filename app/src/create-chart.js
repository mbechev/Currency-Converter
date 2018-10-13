import Chart from 'chart.js';

const getParameters = (rates, dates, from, to) => {
  const ctxL = document.getElementById('lineChart').getContext('2d');
  const myLineChart = new Chart(ctxL, {
    backgroundColor: 'grey',
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: `(1)${from} to (1)${to}`,
        data: rates,
        backgroundColor: [
          'rgb(76, 189, 255)',
        ],
        borderColor: [
          'white',
        ],
        borderWidth: 2,
      }],
    },
    options: {
      responsive: true,
    },
  });
};

export {
  getParameters,
};
