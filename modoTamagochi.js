function tamagochiMode(){ //Ir al modo Tamagochi (Entrar en modo deslizable)
    mostrarDesaparecer("flechas","aparecer")
    mostrarDesaparecer("prota","aparecer")
    if (primeraEntrada){
        primeraEntrada = false
        sala = 0
    }
    irSala(sala)
}
function tamagochiModeOff(){
    primeraEntrada = true
    mostrarDesaparecer("flechas","desaparecer")
    mostrarDesaparecer("prota","desaparecer")
    mostrarDesaparecer(salaActual,"desaparecer")
}
function handlerClickKeys(key){ //Detectar una flecha y mover a la sala adecuada
    console.log(key)
    console.log("de sala:" + sala)
    if (key === "left"){sala = sala - 1}
    else{sala = sala + 1}
    if (sala < 0){sala = maximasSalas}
    if (sala > maximasSalas){sala = 0}
    mostrarDesaparecer(salaActual,"desaparecer")
    console.log("a sala:" + sala)
    irSala(sala)
}
function irSala(ubicacion){
    console.log("Yendo a la sala" + ubicacion)
    switch(ubicacion){
        case 0: habitacion();break;
        case 1: cocina();break;
        case 2: baño();break;
        case 3: gimnasio();break
    }
}
function mostrarDesaparecer(nombre,swap){
    console.log(nombre)
    if (swap === "aparecer"){document.getElementById(nombre).classList.remove("none")}
    else{document.getElementById(nombre).classList.add("none")}
}
document.getElementById("start").addEventListener("click",function(){tamagochiMode()}) //BOTON DE TESTEO
document.getElementById("off").addEventListener("click",function(){tamagochiModeOff()})
