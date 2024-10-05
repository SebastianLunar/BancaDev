document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;

    const dataUser = {
        nombre: nombre,
        edad: edad,
        email: email
    };

    console.log(JSON.stringify(dataUser));
});