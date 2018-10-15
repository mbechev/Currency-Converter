import { list } from './generate-dropdown.js';
import * as $ from 'jquery';
import { convertEvent } from './convert-btn-event.js';
import { swapEvent } from './swap-btn-event.js';
import { chartEvent } from './chart-btn-event.js';

$('#convert-btn').click(function() {
  convertEvent();
});

$('#swap-btn').click(function() {
  swapEvent();
});

$('#chart-btn').click(function() {
  chartEvent();
});
