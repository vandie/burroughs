const Paydays = require('./paydays');
const paydays = new Paydays();
console.log(`All payment days in the next year as follows:\n\n${paydays.nextYearAsCSV()}\n`);