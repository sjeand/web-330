/*
=======================================================
  Title: validator.js
  Author: Professor Krasso
  Date: 04/20/2021
  Modified by: Sarah Jean Baptiste
  Description: Validator
========================================================
*/

import { RequiredField } from "./required-field.js" 

import { FloatField } from "./float-field.js"

import { FloatMinField } from "./float-min-field.js"

import { FloatMaxField } from "./float-max-field.js"

export class Validator{
    validators = [];
    messages = [];
    constructor(name, field){
        this.name = name;
        this.field = field; 
    }
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
    
    validate(){
        for (const validator of this.validators) { 
            if (!validator.validate()){
                this.messages.push(validator.getMessage());
            }
            
        }
        return this.messages.length == 0;
    }
}

