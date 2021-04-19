/*
=======================================================
  Title: cart-component.js
  Author: Professor Krasso
  Date: 04/18/2021
  Modified by: Sarah Jean Baptiste
  Description: Cart Components
========================================================
*/

// Export class and extend html element. 
export class CartComponent extends HTMLElement {
    constructor() {
        super();
    }
    // Create a function and add shopping cart icon/cart-count
    connectedCallback(){
        this.innerHTML = '<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)';  
    }
}
// Call the function and add cart-component string and class. 
customElements.define("cart-component", CartComponent);