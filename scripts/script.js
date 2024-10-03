document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Evita que el formulario se envíe de manera tradicional
  
    // Obtener los valores de los campos
    const nombre = document.getElementById('inputName').value;
    const edad = document.getElementById('inputAge').value;
    const deportes = document.querySelector('input[name="sports"]:checked').value;
    
    // Obtener todos los deportes seleccionados (checkbox)
    const tiposDeporte = Array.from(document.querySelectorAll('input[name="sportsType"]:checked')).map(checkbox => checkbox.value);
  
    // Obtener la preferencia de pasatiempo
    const pasatiempo = document.getElementById('hobbies').value;
  
    // Crear el objeto con los datos ingresados
    const objetoDatos = {
      nombre: nombre,
      edad: edad,
      veDeportes: deportes,
      deportesSeleccionados: tiposDeporte,
      pasatiempo: pasatiempo
    };
  
    // Mostrar el objeto en la consola
    console.log(objetoDatos);
  });
  