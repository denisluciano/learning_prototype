const Car = require('./index');

var C = new Car({
    numDoor: 4,
    numWheels : 4,
    numPeople: 5,
    color : 'red',
    power: 750,
    type: 'cavalos' 
});

console.log(C.desc());

console.log(C)