// Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
// También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
// Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.

const info = document.getElementById("infoBook");
const btnShowInfo = document.getElementById("showInfo");
const btnAgregarCapitulo = document.querySelector(".agregarCapitulo");
const inputCapitulo = document.getElementById("inputCapitulo");
const boxCapitulos = document.getElementsByClassName("listaCapitulos")[0]


const libro = {
    titulo: "Lifespan: Why We Age―and Why We Don't Have To",
    autor: "David A. Sinclair",
    anio: "2019",
    estado: "disponible",
    capitulos:[],
    describirLibro: function () {
         // console.log(libro.describirLibro())
        return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`

    },
    agregarCapitulo: function () {
        const capitulo = inputCapitulo.value.trim();
        if (capitulo !== "") {
            this.capitulos.push(capitulo);
            inputCapitulo.value = ""; // Limpiar el campo de texto
            mostrarCapitulos();
        } 
    },

    eliminarCapitulo: function (index) {
        this.capitulos.splice(index, 1);
        mostrarCapitulos();
    }
};

function imprimir() {
    info.innerText = libro.describirLibro();
}

function mostrarCapitulos() {
    boxCapitulos.innerHTML = ""; // Limpiar la lista antes de actualizar
    libro.capitulos.forEach((capitulo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${capitulo}`;

        // Botón para eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.addEventListener("click", () => libro.eliminarCapitulo(index));

        li.appendChild(btnEliminar);
        boxCapitulos.appendChild(li);
    });
}

btnShowInfo.addEventListener("click",imprimir)


btnAgregarCapitulo.addEventListener("click", function (event) {
    event.preventDefault(); // Evita recarga de página si está dentro de un formulario
    libro.agregarCapitulo();
});