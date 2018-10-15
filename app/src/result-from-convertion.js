import * as $ from 'jquery';

const convertionResult = (rate) => {
  return new Promise((resolve, reject) => {
    const amount = $('#amount').val();
    if (!amount) {
      const errorMessage = 'Invalid amount, please check you input field.';
      const printMEssage = $('#res-par').text(`${errorMessage}`)
          .css('color', 'red');
      reject(printMEssage);
    }
    const calculation = (amount * rate).toFixed(4);
    resolve(calculation);
  });
};

export {
  convertionResult,
};
