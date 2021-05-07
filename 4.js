function ElectronicDevice(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectronicDevice.prototype.connect = function () {
    if (this.isPlugged === false) {
        console.log(`${this.name} was plugged!`);
        this.isPlugged = true;
    } else {
        console.log('The device has already been plugged!')
    }
}
ElectronicDevice.prototype.disconnect = function () {
    if (this.isPlugged === true) {
        console.log(`${this.name} was unplugged!`);
        this.isPlugged = false;
    } else {
        console.log('The device has already been unplugged!')
    }
}

function Computer(name, brand, power, type, functionality){
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
}

Computer.prototype = new ElectronicDevice();
Computer.prototype.hardReset = function () {
    console.log('The Computer was returned to default settings!')
}

function Lamp(name, brand, power, type, color) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.color = color
}

Lamp.prototype = new ElectronicDevice();
Lamp.prototype.changeColor = function (color) {
    this.color = color;
    console.log(`The lamp's color has been changed, now it's ${this.color}`)
}

//Create examples

const notebook = new Computer('Notebook', 'ACER', 120, 'Laptop', 'for work');
const tableLamp = new Lamp('Table Lamp', 'AKIRI', 5, 'LED', 'White');


//plug our devices
notebook.connect();
tableLamp.connect();

//check
console.log(notebook)
console.log(tableLamp)

//Check their own methods
notebook.hardReset()
tableLamp.changeColor('Orange')

//unplug them
notebook.disconnect();
tableLamp.disconnect();

//check
console.log(notebook)
console.log(tableLamp)

// Let's calculate total power
console.log(`Total power is ${notebook.power + tableLamp.power} W!`) //125 W