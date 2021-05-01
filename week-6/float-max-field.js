/*
=======================================================
  Title: float-max-field.js
  Author: Professor Krasso
  Date: 04/20/2021
  Modified by: Sarah Jean Baptiste
  Description: Float Max Field
========================================================
*/

// Export class.
export class FloatMaxField {
  constructor(name, field, max) {
    this.name = name;
    this.field = field;
    this.max = max; 
  }

  validate() {
    let value = parseFloat(this.field);
    return (value < this.max);
  }

  // Message to be displayed when there is an error.
  getMessage() {
    return this.name + " must be less than " + this.max + ". You entered " + this.field; 
  }
}
