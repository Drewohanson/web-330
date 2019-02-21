/*
============================================
; Title:  hanson-1.3.js
; Author: Drew Hanson
; Date:   20 February 2019
; Description: creates cell phone objects
;===========================================
*/

// Console logs the header created in previous weeks
const header = require('../hanson-header.js');
console.log(header.display("Drew" , "Hanson" , "Assignment-1.3"));




// Start Function Class cellPhone
function cellPhone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getModel = function() {
        return this.model
    },

    this.getPrice = function() {
        return this.price
    },
    
    this.getDetails = function() {
        return 'Manufacturer: ' + this.manufacturer + '\n' + 
            'Model: ' + this.getModel() + '\n' +
            'Color: ' + this.color + '\n' +
            'Price: ' + this.getPrice()
    }
};

//variable with cellPhone information
var cellphone = new cellPhone('Samsung', 'Galaxy S10', 'Ocean Blue', '$799.99');

//Output
console.log(cellphone.getDetails());


