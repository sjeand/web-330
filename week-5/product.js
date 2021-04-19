/*
=======================================================
  Title: product.js
  Author: Professor Krasso
  Date: 04/18/2021
  Modified by: Sarah Jean Baptiste
  Description: Products
========================================================
*/

// Export class.
export class Product 
{
    // Constructor to set name and price. 
    constructor (name, price)
    {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2); 
    }
}