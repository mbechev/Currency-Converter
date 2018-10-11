import * as $ from 'jquery';

const swapEvent = () => {
  const from = ($('#from-input').val());
  const to = ($('#to-input').val());
  const newFrom = to;
  const newTo = from;
  $('#from-input').val(newFrom);
  $('#to-input').val(newTo);
};

export {
  swapEvent,
};
