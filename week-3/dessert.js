/*
=======================================================
  Title: dessert.js
  Author: Professor Krasso
  Date: 04/02/2021
  Modified by: Sarah Jean Baptiste
  Description: Desserts
========================================================
*/

// Import product file.
import { Product } from "./product.js";

// Export dessert.
export class Dessert extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}