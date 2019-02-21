/*
============================================
; Title:  hanson-1.4.js
; Author: Drew Hanson
; Date:   21 February 2019
; Description: duck typing
;===========================================
*/

// Console logs the header created in previous weeks
const header = require('../hanson-header.js');
console.log(header.display("Drew" , "Hanson" , "Assignment-1.4"));

//Create Function and prototype
   function Car(model) {
    this.model = model;
   }

   Car.prototype.start = function() {
    console.log("Car added to the racetrack!");
   }

   function Truck(model, year) {
       this.model=model;
       this.year= year;
   }

   Truck.prototype.start = function() {
    console.log("Truck added to the racetrack!");
   }

   function Jeep(model, year,color) {
       this.model=model;
       this.year=year;
       this.color=color;
   }

   Jeep.prototype.start = function() {
    console.log("Jeep added to the racetrack!");
   };

   var racetrack = [];
   function driveIt(vehicle) {
    vehicle.start();
    racetrack.push(vehicle);
   }
 
   var prius = new Car("Prius");
   var f150 = new Truck("F150", "2019");
   var compass = new Jeep("Compass", 2019, "Red");
   
   driveIt(prius);
   driveIt(f150);
   driveIt(compass);

   // Output
   console.log("\n-- The following have been added to the racetrack --");
   for (var k = 0; k < racetrack.length; k++) {
    console.log(racetrack[k].constructor.name + ": " + racetrack[k].model);
   }