var flight = require('./flight');

flight.setOrigin('BLR');
flight.setDestination('LKO');
flight.setNumber(612);

console.log(flight.getInfo());