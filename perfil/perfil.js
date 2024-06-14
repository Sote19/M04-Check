document.addEventListener('DOMContentLoaded', () => {
    const contadorDisplay = document.getElementById('contadorObjetivos');
    const maxObjetivos = 9;
  
    // Generar un número aleatorio entre 0 y maxObjetivos y mostrarlo en el contador
    const numeroAleatorio = Math.floor(Math.random() * (maxObjetivos + 1));
    contadorDisplay.textContent = numeroAleatorio;
  
    // Manejar el clic en el botón de reclamar recompensa
    const reclamarBtn = document.getElementById('reclamarBtn');
    reclamarBtn.addEventListener('click', () => {
      alert('Felicidades, puedes canjear 1 objetivo COMÚN totalmente gratis, ¡Sin gastar tus puntos!');
    });
  });
  