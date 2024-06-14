window.onload = function() {
    updateProgress();
}

function animateprogress(id, startVal, endVal) {    
    var getRequestAnimationFrame = function () {  
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||  
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1 / 60 * 1000);
            };
    };
    
    var fpAnimationFrame = getRequestAnimationFrame();
    var i = startVal;
    var increment = (startVal < endVal) ? 1 : -1;
    var animacion = function () {
        if ((increment > 0 && i <= endVal) || (increment < 0 && i >= endVal)) {
            document.querySelector(id).setAttribute("value", i); 
            document.querySelector(id + "+ span").innerHTML = i + "%"; 
            i += increment;
            fpAnimationFrame(animacion); 
        }
    }
    fpAnimationFrame(animacion);
}

function updateProgress() {
    const progressBar = document.getElementById('progres_bar');
    const checkboxes = document.querySelectorAll('.tareas input[type="checkbox"]');
    const totalTasks = checkboxes.length;
    const completedTasks = document.querySelectorAll('.tareas input[type="checkbox"]:checked').length;
    const newProgress = (completedTasks / totalTasks) * 100;
    const currentProgress = progressBar.getAttribute('value') ? parseFloat(progressBar.getAttribute('value')) : 0;
    animateprogress("#progres_bar", currentProgress, newProgress);
}

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.tareas input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });
});
