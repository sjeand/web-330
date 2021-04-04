/*
=======================================================
  Title: appetizer.js
  Author: Professor Krasso
  Date: 04/02/2021
  Modified by: Sarah Jean Baptiste
  Description: Appetizers
========================================================
*/

// Import product file.
import { Product } from "./product.js";

// Export appetizer.
export class Appetizer extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}