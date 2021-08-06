/*
==========================================
  Title: header.js
  Author: Professor Krasso
  Date: 03/15/2021
  Modified by: Sarah Jean Baptiste
  Description: Theme JavaScript
==========================================
*/

/* Create Header component */ 
class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
         
        <nav class="navbar navbar-expand-lg sticky-top navbar-light">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item" style= "font-weight: 600;">
                    <a href="../index.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item" style= "font-weight: 600;">
                    <a href="about.html" class="nav-link">About</a>
                </li>
                <li class="nav-item" style= "font-weight: 600;">
                    <a href="resume.html" class="nav-link">Resume</a>
                </li>
                <li class="nav-item" style= "font-weight: 600;">
                    <a href="projects.html" class="nav-link">Projects</a>
                </li>
                <li class="nav-item" style= "font-weight: 600;">
                    <a href="database-diagram.html" class="nav-link">Database Diagrams</a>
                </li>
                <li class="nav-item" style= "font-weight: 600;">
                    <a href="api-unit.html" class="nav-link">API Unit Testing</a>
                </li>
                <li class="nav-item" style= "font-weight: 600;">
                    <a href="bucketList.html" class="nav-link">Bucket List</a>
                </li>
                <li class="nav-item" style= "font-weight: 600;">
                    <a href="../personal-portfolio/web-430/jeanBaptiste-tech-value-stream.html" class="nav-link">DevOp's Presentations</a>
                </li>
            </ul>
        </div>
    </nav>


    <div class= "hero-image"> 
        <div class= "hero-text">
            <h1>Sarah Jean Baptiste</h1>
            <h2>Personal Portfolio</h2>
        </div>
    </div>
        `;
    }
}


customElements.define("header-component", Header);