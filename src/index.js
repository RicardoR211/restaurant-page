import "./styles.css";

import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

var divContainer = document.querySelector('.contentContainer');


homeButton.addEventListener('click', ()=>{
    menuButton.className = "navButton";
    homeButton.className = "navButton active";
    contactButton.className = "navButton";

    console.log("Opa")
    divContainer.innerHTML = ""
    createHome();
})

menuButton.addEventListener('click', ()=>{
    menuButton.className = "navButton active";
    homeButton.className = "navButton";
    contactButton.className = "navButton";
    
    divContainer.innerHTML = ""
    createMenu();
})

contactButton.addEventListener('click', ()=>{
    menuButton.className = "navButton";
    homeButton.className = "navButton";
    contactButton.className = "navButton active";

    divContainer.innerHTML = ""
    createContact();
})

homeButton.className = "navButton active";
createHome();
