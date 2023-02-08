let musculos = 0
let comida = 0
let diversion = 0
let voluntad = 0
let voracidad = 0 
let sala
let leftKey = document.getElementById("left")
let rightKey = document.getElementById("right")
//DETECCION DE CLICKS
leftKey.addEventListener("click",function(){handlerClickKeys("left")})
rightKey.addEventListener("click",function(){handlerClickKeys("right")})