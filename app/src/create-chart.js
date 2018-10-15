const getParameters = (rates, dates, from, to, days) => {
  const chartOptions = {
    backgroundColor: 'rgba(173, 255, 239, 0.1)',
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: `${from}/${to} - ${days} days`,
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
  };
  return chartOptions;
};

export {
  getParameters,
};
