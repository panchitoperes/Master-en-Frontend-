const inputComment = document.getElementById("inputComentario")
const btnComment = document.getElementsByTagName("button")[0]
const boxComments = document.getElementsByClassName("comentarios")[0]
const comments = [];
let i = 0;

let comentar = (event) => {
    event.preventDefault(); // Previene que se actualice el sitio al dar click en comentar

    const fecha = new Date();
    const hoy = fecha.toLocaleString();

    const comment = {
        id: i++, // Incrementa el id único para cada comentario
        date: hoy,
        comment: inputComment.value,
        user: "pepe"
    };
    comments.push(comment);
    printComment(comments); // Llama a la función para mostrar los comentarios
    inputComment.value = ""; // Limpia el campo de texto después de comentar
};

let printComment = (array) => {
    boxComments.innerHTML = ""; // Limpia la lista de comentarios antes de imprimir los nuevos

    array.forEach(item => {
        const { id, date, comment, user } = item;

        const li = document.createElement("li");
        li.innerHTML = `${user}<br><b>${comment}</b> ⌚ ${date}`;

        // boton eliminar
        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Eliminar";
        btnDelete.setAttribute("data-id", id);

        // Evento para eliminar el comentario
        btnDelete.addEventListener("click", () => deleteComment(id));

        li.appendChild(btnDelete);
        boxComments.appendChild(li);
    });
};

let deleteComment = (id) => {
    // Encuentra el índice del comentario por su id
    const index = comments.findIndex(comment => comment.id === id);
    if (index !== -1) {
        comments.splice(index, 1); // Elimina el comentario del array
        printComment(comments); // Vuelve a imprimir los comentarios actualizados
    }
};

btnComment.addEventListener("click", comentar); 