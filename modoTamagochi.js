function tamagochiMode(){
    if (primeraEntrada){
        primeraEntrada = false
        sala = 0
    }
    irSala(sala)
    let leftKey = document.getElementById("left")
    let rightKey = document.getElementById("right")
    leftKey.addEventListener("click",function(){handlerClickKeys("left")})
    rightKey.addEventListener("click",function(){handlerClickKeys("right")})
}
function handlerClickKeys(key){
    console.log("click handled")
    if (key === left){sala = sala - 1}
    else{sala = sala + 1}
    if (sala < 0){sala = 1}
    if (sala > 1){sala = 0}
    mostrarDesaparecer(salaActual,"desaparecer")
    irSala(sala)
}
function irSala(ubicacion){
    switch(ubicacion){
        case 0: habitacion();break;
        case 1: cocina();break;
    }
}
function habitacion(){
    salaActual = "hudPrin"
    mostrarDesaparecer("hudPrin","aparecer")
    //interacciones de la habitacion
}
function cocina(){
    salaActual = "hudCocina"
    mostrarDesaparecer("hudCocina","aparecer")
    //interacciones de la cocina
}
function mostrarDesaparecer(nombre,swap){
    console.log(nombre)
    if (swap === "aparecer"){document.getElementById(nombre).classList.remove("none")}
    else{document.getElementById(nombre).classList.add("none")}
}
let salaActual
tamagochiMode()