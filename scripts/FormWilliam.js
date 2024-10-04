const formulario = document.getElementById('form')

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const nombre = document.getElementById('nombre').value
    const apellidos = document.getElementById('apellido').value
    const email = document.getElementById('email').value
    const pasaTiempo = document.getElementById('pasaTiempo').value
    const horaFecha = document.getElementById('horaFecha').value


     const infoParagraph = document.createElement('p');


     infoParagraph.textContent = `Nombre: ${nombre}, Apellidos: ${apellidos}, Email: ${email}, Pasa Tiempo: ${pasaTiempo}, Hora y Fecha: ${horaFecha}`;


     document.body.appendChild(infoParagraph);

})
