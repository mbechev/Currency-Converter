import {
  currenciesArray,
} from './database.js';

const list = document.getElementById('currencies');

currenciesArray.forEach((element) => {
  const option = document.createElement('option');
  option.value = element;
  list.appendChild(option);
});

export {
  list,
};
