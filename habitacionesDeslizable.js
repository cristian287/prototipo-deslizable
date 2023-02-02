//Salas existentes
let salaActual 
let primeraEntrada = true //Definir la sala a 0 si es la primera vez que se accede
let maximasSalas = 2 //Cantidad máxima de switch a salas
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
function baño(){
    salaActual = "hudBaño"
    mostrarDesaparecer("hudBaño","aparecer")
}
function gimnasio(){
    salaActual = "hudGimnasio"
    mostrarDesaparecer("hudGimnasio","aparecer")
}