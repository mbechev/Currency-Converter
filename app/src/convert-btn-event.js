import * as $ from 'jquery';
import { listCurrencies } from './database.js';
import { getExchangeRate } from './get-exchange-rate.js';
import { convertionResult } from './result-from-convertion.js';
import { lastUpdate } from './getLastChange.js';

const convertEvent = () => {
  const from = ($('#from-input').val()); // USD
  const to = ($('#to-input').val()); // BGN

  const url = `https://free.currencyconverterapi.com/api/v6/convert?q=${from}_${to}`;

  const aSync = async function() {
    const exchangeRate = await getExchangeRate(url, from, to);
    const result = await convertionResult(exchangeRate);

    const currentSymbol = listCurrencies[to].currencySymbol || to;
    $('#res-par').text(`${result} ${currentSymbol}`).css('color', 'lawngreen');
    $('#todayDate').text(`${lastUpdate()}`);
  };
  aSync();
};

export {
  convertEvent,
};
