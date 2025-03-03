// let capital = prompt('¿Cuál es la capital de México')

// while(capital != "Ciudad de México"){
//     console.log ("Respuesta incorrecta")
//     capital = prompt('¿Cuál es la capital de México')

// }

// let num = 1
// while( num <= 10 ){
//     console.log( `7x${num}=${7*num}` )
//     console.log( "7x" + num + "=" + (7*num) )
//     num++ 
// }
// let frutas = [
//     {
//         nombre: "manzana",
//         color: "verde"
//     },
//     {
//         nombre: "fresa",
//         color: "rojo"
//     },
//     {
//         nombre: "mora",
//         color: "morado"
//     },
//     {
//         nombre: "limón",
//         color: "verde"
//     }
// ]

// Arreglos y cliclos
// En este proyecto, practicarás los conceptos básicos de arrays (arreglos) y loops (ciclos), que has visto hasta este momento.

// Objetivo
// El objetivo es agregar un archivo a tu repositorio y que contenga la solución al problema planteado a continuación.

// Problema: Clasificación de Frutas
// Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

// Instrucciones para resolver el problema:
// Declara un arreglo llamado frutas con varios tipos de frutas.
// Crea un objeto para almacenar la cantidad de cada tipo de fruta.
// Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
// Imprime en la consola la cantidad de cada tipo de fruta.
// Opcional: intenta implementar la solución con el otro ciclo también (for/while).

let frutas = ['Aguacate', 'Carambola', 'pera', 'manzana', 'naranja', 'pera', 'manzana', 'uva', 'naranja', 'uva', 'pera'];
let cantidadFrutas = {};
let cantidadFrutas2 = {};
let i2 = 0 

for (let i = 0; i < frutas.length; i++) {
     // console.log(`${i+1} ${frutas[i]}`)
      
         let fruta = frutas[i] 
         cantidadFrutas[fruta]= (cantidadFrutas[fruta] & 1) + 1
            
 }
 console.log ("for",cantidadFrutas)


 while( i2 < frutas.length) {
   
    let fruta2 = frutas[i2] 
    cantidadFrutas2[fruta2]= (cantidadFrutas2[fruta2] & 1) + 1
    i2 ++
}
console.log ("while",cantidadFrutas2)