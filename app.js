// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const amigo = document.getElementById("amigo").value
    if(amigo === "") {
        alert("Por favor ingrese un nombre.");
        return;
    }
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const mostrarAmigo = document.getElementById("listaAmigos");
    mostrarAmigo.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        mostrarAmigo.appendChild(li);
        console.log(amigos.length);
    });
}

function sortearAmigo() {
    if(amigos.length < 2) {
        alert("Por favor, ingrese al menos dos nombres para iniciar el sorteo.")
        return;
    }
  
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    let mostrarAmigo = document.getElementById("resultado");
    mostrarAmigo.textContent = "El amigo secreto es:" +amigoSecreto;
        document.getElementById("nuevoSorteo").removeAttribute("disabled");
    
}

function nuevoSorteo() {
    amigos = [];
    document.getElementById("nuevoSorteo").setAttribute("disabled", "true");
    document.getElementById("amigo").value = "";
    document.getElementById("resultado").textContent = "";
    actualizarListaAmigos();
}
