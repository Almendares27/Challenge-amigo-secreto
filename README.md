¡Bienvenido a Amigo Secreto! Esta es una aplicación web simple que te permite ingresar nombres de amigos en una lista y luego realizar un sorteo aleatorio para determinar quién es el "amigo secreto". A continuación, te explicaré cómo usar el programa y cómo funciona el código en términos generales.

🚀 Cómo Usar el Programa
1. Agregar Nombres:
Escribe el nombre de un amigo en el campo de texto.

Haz clic en el botón "Añadir" para agregar el nombre a la lista.

Los nombres agregados aparecerán en una lista debajo del campo de entrada.

2. Validación de Entrada:
Si intentas agregar un nombre sin escribir nada en el campo de texto, el programa mostrará una alerta pidiendo un nombre válido.

3. Realizar el Sorteo:
Una vez que hayas agregado varios nombres, haz clic en el botón "Sortear Amigo".

El programa seleccionará un nombre al azar de la lista y lo mostrará en la pantalla.

🛠️ Estructura del Código
1. HTML (index.html):
Define la estructura de la página web.

Contiene un campo de entrada para agregar nombres, un botón para añadirlos a la lista, y un botón para realizar el sorteo.

También incluye dos listas: una para mostrar los nombres agregados y otra para mostrar el resultado del sorteo.

2. CSS (style.css):
Define los estilos visuales de la página, como colores, fuentes, bordes y disposición de los elementos.

Utiliza variables CSS para mantener los colores consistentes en toda la aplicación.

3. JavaScript (app.js):
Contiene la lógica de la aplicación.

Funcionalidades:

Agregar nombres: Los nombres se almacenan en un array y se muestran en una lista.

Validar entrada: Si el campo de texto está vacío, se muestra una alerta.

Sorteo aleatorio: Selecciona un nombre al azar de la lista y lo muestra en la pantalla.
