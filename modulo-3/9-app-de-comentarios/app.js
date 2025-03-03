const inputComment = document.getElementById("inputComentario")
const btnComment = document.getElementsByTagName("button")[0]
const boxComments = document.getElementsByClassName("comentarios")[0]

let comentar = (event) => {
    event.preventDefault() //Previene que se actualice el sitio al dar click en comentar
    console.log(inputComment.value)
    boxComments.innerHTML += `<li>${inputComment.value}</li>`
    inputComment.value = ""
}

btnComment.addEventListener("click",comentar)