export function createContact(){
    var divContainer = document.querySelector('.contentContainer');
    let aboutContactContainer = document.createElement('div');
    aboutContactContainer.className = "contactContainer"

    let divAbout = document.createElement('div')
    divAbout.className = "divAbout"

    let titleAbout = document.createElement('h2');
    titleAbout.innerHTML = "Quem somos?";

    let pAbout = document.createElement('p');
    pAbout.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam velit, qui assumenda quos sapiente aspernatur pariatur, accusantium similique nam esse libero dignissimos, exercitationem nobis atque magnam veritatis reiciendis eum voluptate?"

    divAbout.appendChild(titleAbout);
    divAbout.appendChild(pAbout);
    aboutContactContainer.appendChild(divAbout);

    let formDiv = document.createElement('div');
    formDiv.className = "formDiv";

    let formTitle = document.createElement('h2');
    formTitle.innerHTML = "Contato:"

    let label = document.createElement('label');
    label.for = "yourName";
    label.innerHTML = "Your Name:";

    let inputName = document.createElement('input');
    inputName.type = "text";
    inputName.name = "yourName";

    let label2 = document.createElement('label');
    label2.for = "yourEmail";
    label2.innerHTML = "Your Email:";

    let inputEmail = document.createElement('input');
    inputEmail.type = "text";
    inputEmail.name = "yourEmail";

    let buttonSubmit = document.createElement('button');
    buttonSubmit.innerHTML = "Submit";

    formDiv.appendChild(formTitle);
    formDiv.appendChild(label);
    formDiv.appendChild(inputName);
    formDiv.appendChild(label2);
    formDiv.appendChild(inputEmail);
    formDiv.appendChild(buttonSubmit);

    aboutContactContainer.appendChild(divAbout);
    aboutContactContainer.appendChild(formDiv);
    divContainer.appendChild(aboutContactContainer);
    
}