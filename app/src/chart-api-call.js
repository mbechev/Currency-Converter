import * as $ from 'jquery';


const getHistoricalData = (days, from, to) => {
    const today = new Date();
    const toDate = today.toISOString().split('T')[0];
    today.setDate(today.getDate() - (days-1));
    const fromDate = today.toISOString().split('T')[0];
    console.log(toDate);
    console.log(fromDate);

    const url = `http://currencies.apps.grandtrunk.net/getrange/${fromDate}/${toDate}/${from.toLowerCase()}/${to.toLowerCase()}`;
    return new Promise((resolve) => {
      $.get(url, (data) => {
        console.log(data);
        resolve(data);
      });
    });
  };

export {
  getHistoricalData,
};
