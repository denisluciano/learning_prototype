var Car = function (config) {

    this.numDoor = config.numDoor,
    this.numWheels  = config.numWheels,
    this.numPeople = config.numPeople,
    this.color  = config.color,
    this.power = config.power,
    //optional 
    this.type = config.type

}

Car.prototype.desc = function () {
    return 'Carro de ' + this.power+ ' ' +this.type;
}
  
  
module.exports = Car