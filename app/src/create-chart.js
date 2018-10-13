import Chart from 'chart.js';

const getParameters = (rates, dates, from, to) => {
  const ctxL = document.getElementById('lineChart').getContext('2d');
  const myLineChart = new Chart(ctxL, {
    backgroundColor: 'rgba(173, 255, 239, 0.1)',
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: `${from}/${to}`,
        data: rates,
        backgroundColor: [
          'rgba(255, 255, 255, 0.2)',
        ],
        borderColor: [
          'rgb(139, 228, 211)',
        ],
        borderWidth: 2,
      }],
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          ticks: {
            fontColor: [
              'white',
            ],
          },
        }],
        yAxes: [{
          ticks: {
            fontColor: [
              'white',
            ],
          },
        }],
      },
    },
  });
};

export {
  getParameters,
};
