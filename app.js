// El principal objetivo de este desafío es fortalecer tus habilidades
//  en lógica de programación. Aquí deberás desarrollar la lógica para
//  resolver el problema.
let input = 0;
let valorIngresado = 0;
let listaAmigos = [];
let numeroAleatorio = 0;
let botonPresionado = false;
let mensajeBoton = "";

function agregarAmigo(){
    let input = document.getElementById('amigo');
    let valorIngresado = input.value;
    if (valorIngresado=="") {
        alert("Ingrese un nombre valido");
    }else{
        console.log(valorIngresado);
        listaAmigos.push(valorIngresado);
        console.log(listaAmigos);
        let ul = document.getElementById('listaAmigos');
        ul.innerHTML ="";

        for (let index = 0; index < listaAmigos.length; index++) {
            let amigo = document.createElement("li");
            amigo.innerHTML = "";
            amigo.textContent = listaAmigos[index];
            ul.appendChild(amigo);
        }
        input.value = "";
    }

}

function sortearAmigo(){
    
   if (listaAmigos != "") {
        let numeroAleatorio = Math.floor(Math.random()*listaAmigos.length);
    
        let ul2 = document.getElementById('resultado');
        ul2.innerHTML = `Tu amigo secreto es ${listaAmigos[numeroAleatorio]}`;
        console.log (numeroAleatorio)
        soloUnClick();
   }else{
    alert("No hay nombres para sortear");
   }
}

function soloUnClick(){
    
    console.log('Botón presionado por primera vez');
    mensajeBoton = document.getElementById('sorteo').innerHTML =
        `<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Ya tienes un Amigo Secreto`;
    document.getElementById('sorteo').style.backgroundColor = '#D3D3D3';
    document.getElementById('sorteo').disabled = true;
}

function validarAmigo(){
    if (!botonPresionado) {
        botonPresionado = true;
        alert("Ingrese un nombre valido");
    } 
}