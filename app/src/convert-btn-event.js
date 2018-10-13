import * as $ from 'jquery';
import {
  listCurrencies,
} from './database.js';

const convertEvent = () => {
  const from = ($('#from-input').val()); // USD
  const to = ($('#to-input').val()); // BGN
  const url = `https://free.currencyconverterapi.com/api/v6/convert?q=${from}_${to}`;

  const getExchangeRate = () => {
    return new Promise((resolve) => {
      $.get(url, (data) => {
        const currrencyTag = `${from}_${to}`;
        resolve(data.results[currrencyTag].val);
      });
    });
  };

  const convertionResult = (rate) => {
    return new Promise((resolve) => {
      const amount = $('#amount').val();
      const calculation = (amount * rate).toFixed(4);
      resolve(calculation);
    });
  };

  const aSync = async function() {
    const exchangeRate = await getExchangeRate();
    const result = await convertionResult(exchangeRate);

    const currentSymbol = listCurrencies[to].currencySymbol || to;
    $('#res-par').text(`${result} ${currentSymbol}`).css('color', 'white');
  };
  aSync();
};

export {
  convertEvent,
};
