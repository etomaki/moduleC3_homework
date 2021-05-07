class ElectronicDevice{
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    connect(){
        if (this.isPlugged === false) {
            console.log(`${this.name} was plugged!`)
            this.isPlugged = true;
        } else {
            console.log('The device has already been plugged!')
        }
    }
    disconnect(){
        if (this.isPlugged === true) {
            console.log(`${this.name} was unplugged!`)
            this.isPlugged = false;
        } else {
            console.log('The device has already been unplugged!')
        }
    }
}
class Computer extends ElectronicDevice{
    constructor(name, brand, power, type, functionality) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
    }
    hardReset(){
        console.log('The Computer was returned to default settings!')
    }
}
class Lamp extends ElectronicDevice{
    constructor(name, brand, power, type, color) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.color = color;
    }
    changeColor(color){
        this.color = color;
        console.log(`The lamp's color has been changed, now it's ${this.color}`)
    }
}

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