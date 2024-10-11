import myImage from "./images/pizzas.jpeg";
export function createHome(){
    
    var divContainer = document.querySelector('.contentContainer');
    
    let card = document.createElement('div')
    card.className = 'cardContainer'

    let title = document.createElement('h2');
    title.innerHTML = "Pizzas Deliciosas";

    let imagem = document.createElement('img');
    imagem.src = myImage;
    imagem.width = 256;
    imagem.alt = "pizzas";

    let description = document.createElement('p');
    description.innerHTML = "Confira o nosso menu";

    let button = document.createElement('button');
    button.innerHTML = "Menu"
    button.className = "navButton";
    button.id = "buttonDiferente";

    card.appendChild(title);
    card.appendChild(imagem);
    card.appendChild(description);
    card.appendChild(button);
    divContainer.appendChild(card)
    console.log("oi");
}

