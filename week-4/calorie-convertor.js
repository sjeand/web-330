/*
=======================================================
  Title: product.js
  Author: Professor Krasso
  Date: 04/20/2021
  Modified by: Sarah Jean Baptiste
  Description: Products
========================================================
*/

// Import FoodModel from food-model.js file
import { FoodModel } from "./food-model.js"; 

// Export class and create static data for food model. 
export class CalorieConverter {  
    static data = [
        new FoodModel(1007, "Egg", 78), 
        new FoodModel(1008, "Apple", 95),
        new FoodModel(1009, "Hamburger", 354),
        new FoodModel(1010, "Fries", 400),
        new FoodModel(1011, "Banana", 105),
        new FoodModel(1012, "Soda", 150),
    ];  

    // Return statement and allow lowercase. 
    static find(searchString) {
        return this.data.filter(foodModel => foodModel.name.toLowerCase() == searchString.toLowerCase());
    }
}