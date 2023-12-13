function openCode() {
    //let newWin = window.open("../Code/index.html", "Close", "width=450,height=350");
    const popup = document.getElementById("popup");
    
    if (popup.innerHTML == '')
        popup.innerHTML = '<iframe class ="inline-code" src="../Code/index.html" id="story-readin" frameborder="0" width="450px" height="350px"></iframe>';
    else
        popup.innerHTML = '';
}

function gotoStory(index) {
    const story = document.getElementById("story-readin");
    story.setAttribute("src", "story/" + index + ".txt")
    let name = "";

    switch (index) {
        case 0: name = "house-inside"; break;
        case 1: name = "house-inside-code"; break;
        case 2: name = "won-screen"; break;
        case 3: name = "won-screen"; break;
        case 4: name = "won-screen"; break;
        case 5: name = "won-screen"; break;
        case 6: name = "won-screen"; break;
        default: name = "won-screen"; break;
    }

    document.body.style.backgroundImage = "url('../img/" + name + ".png')";
}