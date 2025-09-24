// El principal objetivo de este desafío es fortalecer tus habilidades
//  en lógica de programación. Aquí deberás desarrollar la lógica para
//  resolver el problema.
let input = 0;
let valorIngresado = 0;
let listaAmigos = [];
let numeroAleatorio = 0;
let botonPresionado = false;

function agregarAmigo(){
    let input = document.getElementById('amigo');
    let valorIngresado = input.value;
    console.log(valorIngresado);
    listaAmigos.push(valorIngresado);
    console.log(listaAmigos);
}

function sortearAmigo(){
    
    let numeroAleatorio = Math.floor(Math.random()*listaAmigos.length);
    let nombreAmigoSecreto = document.querySelector('h2')
    nombreAmigoSecreto.innerHTML = `Tu amigo secreto es ${listaAmigos[numeroAleatorio]}`;
    console.log (numeroAleatorio)
}


