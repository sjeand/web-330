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
export class ShoppingCart {
    constructor(){
        this.products = [];
    }
    // Count function to count products.
    count(){
        return this.products.length;
    }
    // Add function to add items to cart.
    add(product){
        this.products.push(product);
    }
    *[Symbol.iterator](){
        for (const product of this.products) {
            yield product;    
        }
    }
}