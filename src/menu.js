import myImage from "./images/pizzas.jpeg";

export function createMenu(){
    var divContainer = document.querySelector('.contentContainer');
    var divMenu = document.createElement('div');
    divMenu.className = "menuContainer";
    divContainer.appendChild(divMenu);

    class createItem {
        constructor(nome, descricao, imagem, valor) {
            this.nome = nome;
            this.imagem = imagem; // Caminho da imagem
            this.descricao = descricao;
            this.valor = valor;
        }
    }

    var comidas = [];

    // Passando o caminho da imagem
    const batataFrita = new createItem("Batata Frita", "Batata Saboradfsadgasgafsffhasa Batata Saborosa", myImage, "$1.50");
    comidas.push(batataFrita);
    const batataFrita2 = new createItem("Batata Frita", "Uma Batata Saborosa", myImage, "$1.50");
    comidas.push(batataFrita2);
    const batataFrita3 = new createItem("Batata Frita", "Uma Batata Saborosa", myImage, "$1.50");
    comidas.push(batataFrita3);
    const batataFrita4 = new createItem("Batata Frita", "Uma Batata Saborosa", myImage, "$1.50");
    comidas.push(batataFrita4);
    const batataFrita5 = new createItem("Batata Frita", "Uma Batata Saborosa", myImage, "$1.50");
    comidas.push(batataFrita5);

    divMenu.innerHTML = "";

    comidas.forEach((item) => {
        criarCard(item);
        console.log(item);
    })

    function criarCard(item) {
        console.log("criei o item");
        let cardMenu = document.createElement('div');
        cardMenu.className = "cardMenu";
        
        let imagem = document.createElement('img');
        imagem.src = item.imagem;
        imagem.alt = item.nome;
        imagem.width = 256;
    
        let titleMenu = document.createElement('h2');
        titleMenu.innerHTML = item.nome;
    
        let description = document.createElement('p');
        description.innerHTML = item.descricao
    
        cardMenu.appendChild(imagem);
        cardMenu.appendChild(titleMenu);
        cardMenu.appendChild(description);
        divMenu.appendChild(cardMenu);
        divContainer.appendChild(divMenu);
    }
}

