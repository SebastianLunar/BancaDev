const form = document.getElementById('musicForm');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  
  const nombre = document.getElementById('nombre').value;
  const instrumento = document.getElementById('instrumento').value;
  const practica = document.getElementById('practica').value;

  
  const musica = {
    nombre: nombre,
    instrumento: instrumento,
    practica: `${practica} horas por semana`
  };


  localStorage.setItem('musica', JSON.stringify(musica));

  
});

