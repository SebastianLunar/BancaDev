document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let comidaFavorita = document.getElementById('comida').value;

    // Crear un objeto con los datos ingresados
    let persona = {
        nombre: nombre,
        edad: edad,
        comidaFavorita: comidaFavorita
    };

    console.log(persona);
    alert('Datos capturados: ' + JSON.stringify(persona));
});
