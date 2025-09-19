let numeroSecreto = Math.floor(Math.random()*10 +1);
let intentos =  0; 
let listadenumeros = [];
let numeroMaximo = 10;
let numeroMinimo = 1;
let lenguajes = ['javascript', 'python', 'java', 'c#', 'php', 'ruby', 'go', 'swift', 'kotlin', 'typescript'];
function lenguajespa(){
    return lenguajes;
}
let parrafo = document.querySelector ('p');
parrafo.innerHTML = 'indica un numero de 1 al 10';

function asignartextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);  
    elementoHTML.innerHTML = texto;
    return;
}

function verificarintento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignartextoElemento('p',` acertaste en ${intentos}${intentos === 1 ? ' intento' : ' intentos'}`);
        document.getElementById('reiniciar').disabled = false;

    } else {
        if(numeroDeUsuario < numeroSecreto){
            asignartextoElemento('p','el numero es mayor');
        } else {
            asignartextoElemento('p','el numero es menor');
        }
    }
    limpiarcaja();
    intentos++; 
    return;
}

function limpiarcaja(){
    document.getElementById('valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo +1);
    console.log(numeroGenerado);
    console.log('hola',lenguajespa([]));
    //agregar un elemento a lenguajes
    lenguajes.push('c++');
    console.log(lenguajespa());
    //condicion para ver si ya se sortearon todos los numeros posibles
    if(listadenumeros.length === (numeroMaximo - numeroMinimo + 1)){
        asignartextoElemento ('p', 'ya se sortearon todos los numeros posibles');
        return;
    } else {
        //if para ver si el numero ya esta en la lista
        if (listadenumeros.includes(numeroGenerado)){
            console.log('numero repetido');
            return generarNumeroSecreto();
        } else {
            listadenumeros.push(numeroGenerado);
            console.log(listadenumeros);
            return numeroGenerado;
        }
    } 
}
function condicionesiniciales(){
    asignartextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    asignartextoElemento('h1','juego del numero secreto');
    limpiarcaja();
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
    document.getElementById('reiniciar').disabled = true;
    return;
}

function reiniciarJuego(){
    //limpiar caja, resetear intentos, generar nuevo numero secreto, deshabilitar boton
    condicionesiniciales();
    return;
}

asignartextoElemento('h1','juego del numero secreto');
asignartextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);   
