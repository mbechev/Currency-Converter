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

    // currency symbol if any
    const currentSymbol = listCurrencies[to].currencySymbol || to;

    // tag append is not working here. Fixed as result paragraph text change
    // but we should find a better solution

    // let tag = $('<p></p>')
    // .text(`${result} ! ! ! ${currentSymbol} !`)
    // .css('color', 'white');
    // $('#result').append(tag)
    $('#res-par').text(`${result} ${currentSymbol}`).css('color', 'green');
  };
  aSync();
};

export {
  convertEvent,
};