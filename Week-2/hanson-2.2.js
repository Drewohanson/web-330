/*
============================================
; Title:  Exercise 2.2
; Author: Drew Hanson
; Date:   01 March 2019
; Description: Prototypes
;===========================================
*/

//HEADER
const header = require('../hanson-header.js');
console.log(header.display("Drew", "Hanson", "Assignment 2.2") + "\n");

// start program

var person = {
    getAge: function () {
        return this.age;
    } 
}

var drew = Object.create(person, {
    "age": {
        "value": "34"
    },
    "fullName": {
        "value": "Drew Hanson"
    }
});

drew.getAge();

console.log("The person's full name is: '%s'", drew.fullName);
console.log("The person's age is: '%s'", drew.getAge());



// end program