/*
=======================================================
  Title: required-field.js
  Author: Professor Krasso
  Date: 04/20/2021
  Modified by: Sarah Jean Baptiste
  Description: Required Field
========================================================
*/

// Export class and create constructor for field and name.
export class RequiredField {
    constructor(name, field){
        this.name = name;
        this.field = field; 
    }

    // validate function to return valid or if false do not return.
    validate() {
        let valid =  Boolean(this.field)
        if (valid){
            valid = Boolean(this.field.trim());
        }
        return valid;
    }
    
    // function to show message. 
    getMessage(){
        return this.name + " is a required field."; 
    }
}

