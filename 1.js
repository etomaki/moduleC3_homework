function printObjectProperties(obj){
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(`ключ - ${prop}, значение - ${obj[prop]}`)
        }
    }
}