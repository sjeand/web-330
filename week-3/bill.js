/*
=======================================================
  Title: bill.js
  Author: Professor Krasso
  Date: 04/02/2021
  Modified by: Sarah Jean Baptiste
  Description: Bill
========================================================
*/

// Export Bill and set constructors.
export class Bill {
  constructor() {
      this._beverages = [];
      this._appetizers = [];
      this._mainCourses = [];
      this._desserts = [];
  }

  // Beverage function.
  addBeverage(beverage)
  {
      this._beverages.push(beverage);
  }

  // Appetizer function.
  addAppetizer(appetizer)
  {
      this._appetizers.push(appetizer);
  }

  // Main course function.
  addMainCourse(mainCourse)
  {
      this._mainCourses.push(mainCourse);
  }

  // Dessert function.
  addDessert(dessert)
  {
      this._desserts.push(dessert);
  }

  // Get total function will take selected item and add the price to the total.
  getTotal()
  {
      let total = 0;

      let beverageTotal = this._beverages.forEach(function(beverage)
      {
          total += parseFloat(beverage.price);
      });

      let mainCourseTotal = this._mainCourses.forEach(function(mainCourse)
      {
          total += parseFloat(mainCourse.price);
      });

      let appetizerTotal = this._appetizers.forEach(function(appetizer)
      {
          total += parseFloat(appetizer.price);
      });

      let dessertTotal = this._desserts.forEach(function(dessert)
      {
          total += parseFloat(dessert.price);
      }); 

      // Return total and round to two decimal places.
      return total.toFixed(2);
  }
}

