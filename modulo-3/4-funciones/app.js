
//Declaración de una función

// let n1 = prompt ()
// let n2 = prompt ()


// function suma(n1,n2){
//     let total = n1 + n2;
//     return `El total de la suma es : ${total}`;
// }
// let result = suma (5,7)
// console.log (result)
// let bookList = []

// function addBook (tittle) {
//     bookList.push (tittle)
//     return bookList.length
// }

// function readBooks (array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(<h1>`${i + 1}.- ${array[i]}</h1>);}
// }
// Instrucciones para resolver el problema:
// Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
// Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.


let bookList = [];

function addBook() {
    let title = prompt("Añade un título");

    while (title !== "salir") { 
        bookList.push(title);
        title = prompt("Añade un título");
    }
}
function showReadBooks() {
    console.log("Libros leídos:", bookList);
}
