import {
  currenciesArray,
} from './database.js';
import {
  autocomplete,
} from './autocomplete.js';
import * as $ from 'jquery';
import {
  convertEvent,
} from './convert-btn-event.js';
import {
  swapEvent,
} from './swap-btn-event.js';
import {
  chartEvent,
} from './chart-btn-event.js';


autocomplete(document.getElementById('from-input'), currenciesArray);
autocomplete(document.getElementById('to-input'), currenciesArray);


$('#convert-btn').click(function() {
  convertEvent();
});

$('#swap-btn').click(function() {
  swapEvent();
});

$('#chart-btn').click(function() {
  chartEvent();
});
