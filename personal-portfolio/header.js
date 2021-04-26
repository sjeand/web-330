  
class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
         
    <!--Navigation bar for home, contact, story, employees and shop.-->   
    <nav class="navbar navbar-expand-lg sticky-top navbar-light">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active" style= "font-weight: 600;">
                    <a href="#" class="nav-link">Home</a>
                </li>
                <li class="nav-item" style= "font-weight: 600;">
                    <a href="#" class="nav-link">About</a>
                </li>
                <li class="nav-item" style= "font-weight: 600;">
                    <a href="#" class="nav-link">Resume</a>
                </li>
                <li class="nav-item" style= "font-weight: 600;">
                    <a href="#" class="nav-link">Projects</a>
                </li>
                <li class="nav-item" style= "font-weight: 600;">
                    <a href="#" class="nav-link">Database Diagrams</a>
                </li>
                <li class="nav-item" style= "font-weight: 600;">
                    <a href="#" class="nav-link">API Unit Testing</a>
                </li>
                <li class="nav-item" style= "font-weight: 600;">
                    <a href="#" class="nav-link">Bucket List</a>
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