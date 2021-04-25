/*
=======================================================
  Title: required-field.js
  Author: Professor Krasso
  Date: 04/20/2021
  Modified by: Sarah Jean Baptiste
  Description: Required Field
========================================================
*/

// Export class.
export class FloatField {
    constructor(name, field){
        this.name = name;
        this.field = field; 
    }
    validate() {
        let result = parseFloat(this.field);
        return !isNaN(result);
    }
    
    getMessage(){
        return this.name + " must be a float value. You entered " + this.field; 
    }
}
