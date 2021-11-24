var colorBotones = localStorage.getItem("colorBoton");
var colorFondos = localStorage.getItem("colorFondos");
var colorLetras = localStorage.getItem("colorLetra");
var sizeFont = localStorage.getItem("tamanoLetra");
var nombreUsuario = localStorage.getItem("nombreUsuario")

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
}
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
function cambiarTamanoLetra(tamanoLetra) {
    var textos = document.querySelectorAll("p");
    console.log(textos.length)
    for (let texto of textos) {
        console.log(texto)
        texto.style.fontSize = tamanoLetra + "px";
      }
}
function pageRegistrar() {
    console.log("datoRegistro")
    var element = document.getElementById("main");
    element.innerHTML = "Contactanos.html"
}

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

function aplicar_oferta() {
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
    tabla.setAttribute("border", "6");
}

function listarAspirantes() {
    var body = document.getElementsByTagName("body")[0];
    var lista = document.createElement("div");
    var br = document.createElement("hr");
    for (var i = 0; i < aspirantes.employees.length; i++) {
        var nombreEmpresa = document.createElement("h3");
        var textoCelda = document.createTextNode(aspirantes.employees[i].firstName);
        nombreEmpresa.appendChild(textoCelda);
        lista.appendChild(nombreEmpresa);
    }
    body.appendChild(br);
    body.appendChild(lista);
    body.appendChild(br);
}

function listarOfertas() {
    var body = document.getElementsByTagName("main")[0];
    var lista = document.createElement("div");
    var br = document.createElement("br");
    for (var i = 0; i < ofertas.ofertas.length; i++) {
        var nombreEmpresa = document.createElement("h3");
        var textoNombreEmpresa = document.createTextNode(ofertas.ofertas[i].nombre);
        nombreEmpresa.appendChild(textoNombreEmpresa)
        
        var imagenOferta = document.createElement("img");
        imagenOferta.src = ofertas.ofertas[i].imagen

        var descripcion = document.createElement("p");
        var textoDescripcion = document.createTextNode(ofertas.ofertas[i].descripcion);
        descripcion.appendChild(textoDescripcion)

        var salario = document.createElement("p");
        var textoSalario = document.createTextNode(ofertas.ofertas[i].salario);
        salario.appendChild(textoSalario)

        var categoria = document.createElement("p");
        var textoCategoria = document.createTextNode(ofertas.ofertas[i].categoria);
        categoria.appendChild(textoCategoria);

        var aplicar = document.createElement("button");
        var textoAplicar = document.createTextNode("Aplicar");
        aplicar.appendChild(textoAplicar);
        aplicar.addEventListener(onclick, aplicarOferta(ofertas.ofertas[i]))
        
        lista.appendChild(nombreEmpresa);
        lista.appendChild(br);
        lista.appendChild(imagenOferta);
        lista.appendChild(br);
        lista.appendChild(descripcion);
        lista.appendChild(salario);
        lista.appendChild(categoria);
        lista.appendChild(br);
        lista.appendChild(aplicar);
        
    }
    body.appendChild(br);
    body.appendChild(lista);
    body.appendChild(br);
}

var aplicaciones = JSON.parse(localStorage.getItem("aplicaciones"));

function aplicarOferta(oferta){
    if (aplicaciones == null){
        aplicaciones = {
            aplicaciones:[]
        }
    }
    aplicaciones.aplicaciones.push({
        "descripcion": oferta.descripcion,
        "salario": oferta.salario
    });
    console.log(aplicaciones);
    localStorage.setItem("aplicaciones", JSON.stringify( aplicaciones ));

}

aspirantes = {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"},
      {"firstName":"Peter2", "lastName":"Jones"},
      {"firstName":"Peter3", "lastName":"Jones"}
    ]
}

/*para la precentación = {
    "ofertas":[
        {
            "nombre":"Maramud cevicheria",
            "imagen":"https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/798470/72HUB_CAM02_vzkie8.jpg",
            "descripcion":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "salario":"4500000",
            "categoria":"alimentos"
        },
        {
            "nombre":"Coca-cola",
            "imagen":"https://cdni.rt.com/actualidad/public_images/2019.02/article/5c66aabbe9180f20238b4567.jpg",
            "descripcion":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "salario":"5000000",
            "categoria":"bebidas"
        },
        {
            "nombre":"Pepsi",
            "imagen":"https://estaticos.efe.com/efecom/recursos2/imagen.aspx?lVW2oAh2vjOKNtKa4R7X-P-2b5yytUqq3dRoQ4TncnkXVSTX-P-2bAoG0sxzXPZPAk5l-P-2fU5UB9FyZoYGIBJ49ThRGGft0w-P-3d-P-3d",
            "descripcion":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "salario":"4800000",
            "categoria":"bebidas"
        },
    ]
}*/

var ofertas = JSON.parse(localStorage.getItem("ofertas"));

function crearOferta(){
    if (ofertas == null){
        ofertas = {
            ofertas:[]
        }
    }
    ofertas.ofertas.push({
        "nombre": document.getElementById("nombreEmpresa").value,
        "imagen": document.getElementById("imagenEmpresa").value,
        "descripcion": document.getElementById("descripcionOferta").value,
        "salario": document.getElementById("salario").value,
        "categoria": document.getElementById("categoria").value
    });
    console.log(ofertas);
    localStorage.setItem("ofertas", JSON.stringify( ofertas ));

}

//Registro para usuarios 

var usuarios = JSON.parse(localStorage.getItem("usuarios"));

function registrarUsuario(){
    if (usuarios == null){
        usuarios = {
            usuarios:[]
        }
    }

    var password = document.getElementById("password").value
    var passwordConfirm = document.getElementById("passwordConfirm").value
    if(password == passwordConfirm){
        usuarios.usuarios.push({
            "nombreUsuario": document.getElementById("usuario").value,
            "correo": document.getElementById("correo").value,
            "contrasena": password,
            "palabraClave": document.getElementById("clave").value,
        });
        console.log(usuarios);
        localStorage.setItem("usuarios", JSON.stringify( usuarios ));
    
    }else{
        alert("Las contraseñas no coinciden")
    }
}

//Registro para empresas 

var empresas = JSON.parse(localStorage.getItem("empresas"));

function registrarEmpresas(){
    if (empresas == null){
        empresas = {
            empresas:[]
        }
    }
    var password = document.getElementById("password").value
    var passwordConfirm = document.getElementById("passwordConfirm").value
    if(password == passwordConfirm){
        
        empresas.empresas.push({
            "nombreEmpresa": document.getElementById("empresa").value,
            "correo": document.getElementById("correo").value,
            "contrasena": document.getElementById("password").value,
            "palabraClave": document.getElementById("clave").value,
        });
        console.log(empresas);
        localStorage.setItem("empresas", JSON.stringify( empresas ));
    
    }else{
        alert("Las contraseñas no coinciden")
    }
}

//Login

function ingresar(){
    var usuario = document.getElementById("usuario").value
    var password = document.getElementById("contrasena").value

    var listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    console.log(listaUsuarios)
    console.log(usuario)
    console.log(listaUsuarios.usuarios[0].contrasena)
    for (var i = 0; i < listaUsuarios.usuarios.length; i++) {
        if(usuario == listaUsuarios.usuarios[i].nombreUsuario){
            if(password == listaUsuarios.usuarios[i].contrasena){
                localStorage.setItem("nombreUsuario", listaUsuarios.usuarios[i].nombreUsuario)
                location.href="desempleado.html"
                return
            }
        }
    }

    var listaEmpresas = JSON.parse(localStorage.getItem("empresas"));
    for (var i = 0; i < listaEmpresas.empresas.length; i++) {
        if(usuario == listaEmpresas.empresas[i].nombreEmpresa){
            if(password == listaEmpresas.empresas[i].contrasena){
                localStorage.setItem("nombreUsuario", listaEmpresas.empresas[i].nombreEmpresa)
                location.href="empresas.html"
                return
            }
        }

    }
    alert("El usuario ó la contraseña son inválidas")

    
}