const imagem1= document.getElementById ('img1');
const nomepersonagem1 = document.querySelector ('#nome-personagem1');
const imagem2= document.getElementById ('img2');
const nomepersonagem2 = document.querySelector ('#nome-personagem2');
const imagem3= document.getElementById ('img3');
const nomepersonagem3 = document.querySelector ('#nome-personagem3');
const imagem4= document.getElementById ('img4');
const nomepersonagem4 = document.querySelector ('#nome-personagem4');

let nomeDoPersonagem1;
let nomeDoPersonagem2;
let nomeDoPersonagem3;
let nomeDoPersonagem4;

gerarValorAleatorio1 = () => {
    return Math.floor(Math.random() * 671);
}
gerarValorAleatorio2 = () => {
    return Math.floor(Math.random() * 671);
}

gerarValorAleatorio3 = () => {
    return Math.floor(Math.random() * 671);
}
gerarValorAleatorio4 = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem1 = () => {
    let numeroAletatorio1 = gerarValorAleatorio1();
    return fetch (`https://rickandmortyapi.com/api/character/${numeroAletatorio1}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = data.name;
        nomeDoPersonagem1 = data.name;
        nomepersonagem1.innerHTML = `Este personagem é ${nomeDoPersonagem1}`;
        imagem1.style.opacity = 1;
    })
}

pegarPersonagem2 = () => {
    let numeroAletatorio2 = gerarValorAleatorio2();
    return fetch (`https://rickandmortyapi.com/api/character/${numeroAletatorio2}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2 = data.name;
        nomepersonagem2.innerHTML = `Este personagem é ${nomeDoPersonagem2}`;
        imagem2.style.opacity = 1;
    })
}

pegarPersonagem3 = () => {
    let numeroAletatorio3 = gerarValorAleatorio3();
    return fetch (`https://rickandmortyapi.com/api/character/${numeroAletatorio3}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3 = data.name;
        nomepersonagem3.innerHTML = `Este personagem é ${nomeDoPersonagem3}`;
        imagem3.style.opacity = 1;
    })
}

pegarPersonagem4 = () => {
    let numeroAletatorio4 = gerarValorAleatorio4();
    return fetch (`https://rickandmortyapi.com/api/character/${numeroAletatorio4}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem4.src = data.image;
        imagem4.alt = data.name;
        nomeDoPersonagem4 = data.name;
        nomepersonagem4.innerHTML = `Este personagem é ${nomeDoPersonagem4}`;
        imagem4.style.opacity = 1;
    })
}


processar = () => {
    pegarPersonagem1();
    pegarPersonagem2();
    pegarPersonagem3();
    pegarPersonagem4();
}

addEventListener("load",processar);
