function chooseOption(id) {
    var answer = document.getElementById(id);
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
    }
    var botones = document.querySelectorAll(".boton");
    for (var i = 0; i < botones.length; i++) {
        botones[i].style.display = "none";
    }
}
function chooseOption2(id) {
    var answer = document.getElementById(id);
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
    }
    var botones = document.querySelectorAll(".boton2");
    for (var i = 0; i < botones.length; i++) {
        botones[i].style.display = "none";
    }
}