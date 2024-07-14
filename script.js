'use strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

//função que cria a div e a class
const criaDiv = (texto) => {
        //cria uma nova div
        const div = document.createElement('div');
        //adiciona uma class a uma div
        div.classList.add('key');
        //adiciona o texto
        div.textContent = texto;
        //cria um id para a div
        div.id = texto
        //adiciona a div em uma outra div
        document.querySelector('#container').appendChild(div);
};


const exibir = (sons) => Object.keys(sons).forEach(criaDiv);


const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`)
    audio.play();
}

const adicionarEfeito = (letra) => document.getElementById(letra).classList.add('active')

const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend',removeActive)
}

const ativarDiv = (event) => {
    let letra = ''
    if (event.type == 'click') {
        letra = event.target.id;
    }else {
        letra = event.key.toUpperCase();
    }
    
    
    const letraPermitida = sons.hasOwnProperty(letra);
    if(letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    };
    
}

exibir(sons);
document.getElementById('container').addEventListener('click',ativarDiv);

window.addEventListener("keydown",ativarDiv);