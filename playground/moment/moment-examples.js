var moment = require('moment');

console.log(moment());
// unix time stamps
// January 1st 1970 @ 12.00am -> 0;
// January 1st 170 @ 12.00am -> -60;

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1528970602;

// reverse-engeneer/ convert it to a readable format -user friendly;
var currentMoment = moment.unix(timestamp);

console.log('current moment one =>', currentMoment.format('MMM D, YY @ h:mm a'));

// define how you want to display/ define time(http://momentjs.com/docs/#/displaying);

//  January 3rd, 2018 @ 12:13 AM;
console.log('current moment two ==>', currentMoment.format('MMMM Qo, YYYY @ HH:mm A'));
