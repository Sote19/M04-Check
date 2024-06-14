document.addEventListener('DOMContentLoaded', function () {
    const rangeSlider = document.getElementById('rangeSlider');
    const sliderValue = document.getElementById('sliderValue');

    rangeSlider.addEventListener('input', function () {
        sliderValue.textContent = rangeSlider.value;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Genera un número aleatorio entre 1 y 50
    const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
    // Muestra el número en el elemento con id "numero-aleatorio"
    document.getElementById("numero-aleatorio").textContent = numeroAleatorio;
});