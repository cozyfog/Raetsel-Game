let currentIndex = 0;

function openCode() {
    //let newWin = window.open("../Code/index.html", "Close", "width=450,height=350");
    const popup = document.getElementById("code-entry-full");
    
    if (popup.getAttribute("class") != 'hide')
        popup.setAttribute("class", "hide");
    else
        popup.setAttribute("class", "");
}

function gotoStory(index) {
    const story = document.getElementById("story-readin");
    story.setAttribute("src", "story/" + index + ".txt")
    let name = "";
    currentIndex = index;

    let elements = {
        "button-code": false,
        "button-story0": false,
        "button-story1": false,
        "button-story2": false,
        "button-story3": false,
        "button-story4": false,
        "button-story5": false,
        "button-story6": false
    };
    
    switch (index) {
        case 0:
            name = "house-inside";
            elements["button-code"] = true;
            break;
        case 1:
            name = "house-inside-code";
            break;
        case 2:
            name = "won-screen";
            break;
        case 3:
            name = "won-screen";
            break;
        case 4:
            name = "won-screen";
            break;
        case 5:
            name = "won-screen";
            break;
        case 6:
            name = "won-screen";
            break;
        default:
            name = "won-screen";
            break;
    }

    for (const [key, value] of Object.entries(elements)) {
        if (value == false)
            document.getElementById(key).setAttribute("class", "topbar-button");
        else
            document.getElementById(key).setAttribute("class", "topbar-button hide");
    }

    document.body.style.backgroundImage = "url('../img/" + name + ".png')";
}