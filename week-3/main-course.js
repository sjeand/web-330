/*
=======================================================
  Title: main-course.js
  Author: Professor Krasso
  Date: 04/02/2021
  Modified by: Sarah Jean Baptiste
  Description: Main Courses
========================================================
*/

// Import product file.
import { Product } from "./product.js";

// Export main courses.
export class MainCourse extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}