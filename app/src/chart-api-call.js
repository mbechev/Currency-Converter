import * as $ from 'jquery';
import {
  currenciesArray,
} from './database.js';

const getHistoricalData = (days, from, to) => {
  const today = new Date();
  const toDate = today.toISOString().split('T')[0];
  today.setDate(today.getDate() - (days - 1));
  const fromDate = today.toISOString().split('T')[0];

  const url = `http://currencies.apps.grandtrunk.net/getrange/${fromDate}/${toDate}/${from.toLowerCase()}/${to.toLowerCase()}`;

  return new Promise((resolve, reject) => {
    if (currenciesArray.includes(from) && currenciesArray.includes(to)) {
      $('#err-msg').text('');
    } else {
      const errorMessage = !currenciesArray.includes(from) ?
        'Invalid currency, in "from" input filed.' :
        'Invalid currency, in "to" input field.';
      const printMEssage = $('#err-msg')
          .text(`${errorMessage}`).css('color', 'red');
      reject(printMEssage);
    }
    $.get(url, (data) => {
      resolve(data);
    });
  });
};

export {
  getHistoricalData,
};
