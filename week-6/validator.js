/*
=======================================================
  Title: validator.js
  Author: Professor Krasso
  Date: 04/20/2021
  Modified by: Sarah Jean Baptiste
  Description: Validator
========================================================
*/

// Import classes for designated files. 
import { RequiredField } from "./required-field.js" 
import { FloatField } from "./float-field.js"
import { FloatMinField } from "./float-min-field.js"
import { FloatMaxField } from "./float-max-field.js"

// Export class,  create classes for validators and messages, assign empty arrays, and create a constructor.
export class Validator{
    validators = [];
    messages = [];
    constructor(name, field){
        this.name = name;
        this.field = field; 
    }
    
    // Get name and field for each class.
    addRequiredField(){
        this.validators.push(new RequiredField(this.name, this.field));
    }
    
    addRequiredFloatField(){
        this.validators.push(new FloatField(this.name, this.field));
    }
    
    addFloatMinField(min){
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }
    
    addFloatMaxField(max){
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }
    
    // Function to validate and get message.
    validate(){
        for (const validator of this.validators) { 
            if (!validator.validate()){
                this.messages.push(validator.getMessage());
            }
            
        }
        return this.messages.length == 0; 
    }
}

