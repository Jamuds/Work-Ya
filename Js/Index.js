var colorBotones = localStorage.getItem("colorBoton");
var colorFondos = localStorage.getItem("colorFondos");
var colorLetras = localStorage.getItem("colorLetra");
var sizeFont = localStorage.getItem("tamanoLetra");


pintarFondo(colorFondos || "#FFF")
boton(colorBotones || "#DEDEDE")
cambiarColorLetra(colorLetras || "#000000")
cambiarTamanoLetra(sizeFont || "14px")

console.log(colorFondos);

function iniciar(){
    pintarFondo(colorFondos);
}
//LocalStorage
function colorboton(color) {
    localStorage.setItem("colorBoton", color)
    boton(color)
}
function guardarColor(x) {
    localStorage.setItem("colorFondos", x.value)
    pintarFondo(x.value)
}
function guardarColorLetra(color) {
    localStorage.setItem("colorLetra", color)
    cambiarColorLetra(color)
}
function guardarTamanoLetra(texto) {
    localStorage.setItem("tamanoLetra", texto)
    cambiarColorBorde(texto)
}//
function pintarFondo(color){
    var body = document.querySelector("body");
    body.style.backgroundColor = color
}
function boton(color) {
    colorBotones = color
    var botones = document.querySelectorAll("button");
    
    console.log(botones.length)
    for (let boton of botones) {
        console.log(boton)
        boton.style.background = color;
        
      }
}
function cambiarColorLetra(colorLetra) {
    colorLetras = colorLetra
    var textos = document.getElementsByClassName("texto-class");
    console.log(textos.length)
    for (let texto of textos) {
        console.log(texto)
        texto.style.color = colorLetra;
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
function cambiarTamanoLetra(tamanoLetra) {
    var textos = document.querySelectorAll("p");
    console.log(textos.length)
    for (let texto of textos) {
        console.log(texto)
        texto.style.fontSize = tamanoLetra + "px";
      }
}
function pageRegistrar() {
    var element = document.getElementById("main");
    element.innerHTML = "Contactanos.html"
}

//boton.className = 'texto-class';

function genera_tabla() {
    var body = document.getElementsByTagName("body")[0];
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i < 4; i++) {
        var hilera = document.createElement("tr");
        for (var j = 0; j < 4; j++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("Oferta "+i+", descripción "+j);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
    }
    tblBody.appendChild(hilera);
  }
  tabla.appendChild(tblBody);
  body.appendChild(tabla);
  tabla.setAttribute("border", "2");
}