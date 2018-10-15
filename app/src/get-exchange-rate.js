import * as $ from 'jquery';
import { currenciesArray } from './database.js';

const getExchangeRate = (url, from, to) => {
  return new Promise((resolve, reject) => {
    if (!currenciesArray.includes(from) || !currenciesArray.includes(to)) {
      const errorMessage = !currenciesArray.includes(from) ?
        'Invalid currency, in "from" input filed.' :
        'Invalid currency, in "to" input field.';
      const printMEssage = $('#res-par')
          .text(`${errorMessage}`).css('color', 'red');
      reject(printMEssage);
    }
    $.get(url, (data) => {
      const currrencyTag = `${from}_${to}`;
      resolve(data.results[currrencyTag].val);
    });
  });
};

export {
  getExchangeRate,
};
