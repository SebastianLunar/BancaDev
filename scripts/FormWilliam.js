const formulario = document.getElementById('form')

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const nombre = document.getElementById('nombre').value
    const apellidos = document.getElementById('apellido').value
    const email = document.getElementById('email').value
    const pasaTiempo = document.getElementById('pasaTiempo').value
    const horaFecha = document.getElementById('HoraFecha').value

    if (!formulario) {
            alert('mostrar datos: ' +nombre+ apellidos+ email+ pasaTiempo+ horaFecha)
    } else {
        alert('ingrese datos')
    }
})
