/*
==========================================
  Title: theme.js
  Author: Professor Krasso
  Date: 03/15/2021
  Modified by: Sarah Jean Baptiste
  Description: Theme JavaScript
==========================================
*/

class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            
  <div id="footer">
           
  <!-- Grid container -->
  <div class="container p-4">
          
      <section class="mb-4">
          <p id="quick-links">Quick Links:</p>
      </section>

      <!-- Section: Social media -->
      <section>
          <!-- Facebook -->
          <div id= "icons">
              <a class="btn btn-outline-dark btn-floating" href="https://github.com/sjeand" role="button" target="_blank">
                  <i class="bi bi-github"></i>    
              </a>
              <p style="font-size: 12px; margin-top: 10px;">My Repository</p>
          </div>

          <div id= "icons">
              <a class="btn btn-outline-dark btn-floating" href="https://github.com/buwebdev/web-330" role="button" target="_blank">
                  <i class="bi bi-github"></i>
              </a>
              <p style="font-size: 12px; margin-top: 10px;">Web-330 Repository</p>
          </div>  

          <div id= "icons">
              <a class="btn btn-outline-dark btn-floating" href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" role="button" target="_blank">
                  <i class="bi bi-plus-square"></i>
              </a>
              <p style="font-size: 12px; margin-top: 10px;">Bellevue Web Development</p>
          </div>

          <div id= "icons">
              <a class="btn btn-outline-dark btn-floating" href="#!" role="button" target="_blank">
                  <i class="bi bi-youtube"></i>
              </a>
              <p style="font-size: 12px; margin-top: 10px;">Web-330 YouTube Channel</p>
          </div>

      </section>
  </div>

  
  <!-- Copyright -->
  <hr>
  <div class="text-center p-3" style= "font-family: 'Playfair Display', serif;">© 2021 Sarah Jean Baptiste</div>

        `;
    }
}

customElements.define("footer-component", Footer);