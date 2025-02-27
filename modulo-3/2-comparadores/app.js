let nota = prompt("Introduce la nota"); 

if (nota >= 0) {

    if (nota >= 90) {
        console.log(`Nota obtenida: ${nota}`);
        console.log(`Resultado: Excelente`);
    } else if (nota >= 75) {
        console.log(`Nota obtenida: ${nota}`);
        console.log(`Resultado: Bien`);
    } else if (nota >= 60) {
        console.log(`Nota obtenida: ${nota}`);
        console.log(`Resultado: Suficiente`);
    } else {
        console.log(`Nota obtenida: ${nota}`);
        console.log(`Resultado: No aprueba`);
    }
} else {
         console.log("Error: Nota inválida");
}
