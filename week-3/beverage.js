/*
=======================================================
  Title: beverage.js
  Author: Professor Krasso
  Date: 04/02/2021
  Modified by: Sarah Jean Baptiste
  Description: Beverages
========================================================
*/

// Import product file.
import { Product } from "./product.js";

// Export Beverages.
export class Beverage extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}