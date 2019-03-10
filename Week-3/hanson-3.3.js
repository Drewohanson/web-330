/*
============================================
; Title:  Exercise 3.3
; Author: Drew Hanson
; Date:   7 March 2019
; Description: Singleton Pattern
;===========================================
*/

//Header
const header = require('../hanson-header.js');
console.log(header.display("Drew", "Hanson", "Exercise 3.3") + "\n");

//Start Program


// DatabaseSingleton function defined 
var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
      var postgresDatabase = new Object("Database instance initialized!");
      return postgresDatabase;
    }
    return {
      getInstance: function() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    }
   })();
  
  //  DatabaseSingleton called 
  function databaseSingletonTest(){
    var database1 = DatabaseSingleton.getInstance();
    var database2 = DatabaseSingleton.getInstance();
    console.log("\nSame database instance? %s", (database1 === database2));
  }
  
  // databaseSingletonTest function
  databaseSingletonTest();
  
  // end program