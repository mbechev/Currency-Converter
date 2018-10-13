import { currenciesArray } from './database.js';
import * as $ from 'jquery';
import { convertEvent } from './convert-btn-event.js';
import { swapEvent } from './swap-btn-event.js';
import { chartEvent } from './chart-btn-event.js';

const list = document.getElementById('currencies');

currenciesArray.forEach((element) => {
  const option = document.createElement('option');
  option.value = element;
  list.appendChild(option);
});

$('#convert-btn').click(function() {
  convertEvent();
});

$('#swap-btn').click(function() {
  swapEvent();
});

$('#chart-btn').click(function() {
  chartEvent();
});
