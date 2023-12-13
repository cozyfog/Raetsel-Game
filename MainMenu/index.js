function QuitGame() {
    window.close();
}

function Credits() {
    const Credits = document.getElementById("Credits");
    
    if (Credits.innerHTML == '') {
        Credits.innerHTML = '<iframe class="Credit_Style" src="Credits/Credits.html" id="Credits" frameborder="0" width="500px" height="275px"></iframe>'
        document.body.style.background = (0, 0, 0, 1);
    }
    else
        Credits.innerHTML = '';
}

function StartGame() {
    window.open("../Play/index.html", "_self")
}