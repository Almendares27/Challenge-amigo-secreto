// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo'); // Obtener el campo de texto
    const nombre = input.value.trim(); // Limpiar espacios en blanco

    // Validar si el campo está vacío
    if (nombre === '') {
        alert('¡Por favor escribe un nombre válido!'); // Mostrar alerta
        return; // Detener la función
    }

    amigos.push(nombre); // Agregar nombre al array
    actualizarLista(); // Actualizar la lista visual
    input.value = ''; // Limpiar el campo de texto
}

// Función para actualizar la lista visual en HTML
function actualizarLista() {
    const lista = document.getElementById('listaAmigos'); // Obtener la lista
    lista.innerHTML = ''; // Limpiar lista anterior

    // Crear un elemento <li> por cada amigo
    amigos.forEach(amigo => {
        const elemento = document.createElement('li');
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Validar si hay amigos en la lista
    if (amigos.length === 0) {
        alert('¡Agrega al menos un amigo primero!');
        resultado.innerHTML = ''; // Limpiar resultado
        return;
    }

    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado
    resultado.innerHTML = `<li>¡El amigo secreto es: ${amigoSecreto}!</li>`;
}