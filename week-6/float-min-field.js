/*
=======================================================
  Title: float-min-field.js
  Author: Professor Krasso
  Date: 04/20/2021
  Modified by: Sarah Jean Baptiste
  Description: Float Min Field
========================================================
*/

// Export class and create constructor for name, field, and min.
export class FloatMinField {
    constructor(name, field, min){
        this.name = name;
        this.field = field; 
        this.min = min; 
    }
    validate(){
        let value = parseFloat(this.field);
        return (value > this.min);
    }
    
    // Message to be displayed when there is an error.
    getMessage(){
    return this.name + " must be more than " + this.min + ". You entered " + this.field
    }
}

