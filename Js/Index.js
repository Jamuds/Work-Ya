localStorage.setItem("colorFondos", "#FFF");

var colorBotones;
var colorFondos = localStorage.getItem("colorFondos");
var colorBordes;
var colorLetras;
var sizeFont;  
//element.style.setProperty("btn", colorBotones)



console.log(colorFondos);

function iniciar(){
    pintarFondo(colorFondos);
}


function guardarColor(x) {
    localStorage.setItem("colorFondos", x.value)
    pintarFondo(x.value)
}

function pintarFondo(color){
    var body = document.getElementById("body");
    body.style.backgroundColor = color
}


function boton(y) {
    colorBotones = y.value
    var botones = document.getElementsByClassName("btn");
    
    console.log(botones.length)
    for (let boton of botones) {
        console.log(boton)
        boton.style.background = y.value;
        
      }
}

function cambiarColorLetra(x) {
    colorLetras = x.value
    var textos = document.getElementsByClassName("texto-class");
    console.log(textos.length)
    for (let texto of textos) {
        console.log(texto)
        texto.style.color = x.value;
      }
}

function cambiarColorBorde(x) {
    colorBordes = x.value
    var textos = document.getElementsByClassName("img-class");
    console.log(textos.length)
    for (let texto of textos) {
        console.log(texto)
        texto.style.borderColor = x.value;
      }
}

function cambiarTamañoLetra(x) {
    sizeFont = x.value
    var textos = document.getElementsByClassName("p-size");
    console.log(textos.length)
    for (let texto of textos) {
        console.log(texto)
        texto.style.fontSize = x.value;
      }
}

function pageRegistrar() {
    var element = document.getElementById("main");
    element.innerHTML = "Contactanos.html"
}

//boton.className = 'texto-class';