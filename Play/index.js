let currentIndex = 0;

function openCode() {
    const popup = document.getElementById("code-entry-full");
    
    if (popup.getAttribute("class") != 'hide')
        popup.setAttribute("class", "hide");
    else
        popup.setAttribute("class", "");
}

function openMap() {
    const map = document.getElementById("map");
    
    if (map.getAttribute("class") != 'hide')
        map.setAttribute("class", "hide");
    else
        map.setAttribute("class", "map1");
}

function gotoStory(index) { 
    /*const height = window.screen.availHeight;
    const width = window.screen.availWidth;
    
    document.body.setAttribute("style", document.body.getAttribute("style") + "background-size: " + width + " " + height + ";");
*/
    let name = "";
    currentIndex = index;

    let elements = {
        "button-code": true,
        "button-final": true,
        "button-story0": false,
        "button-story1": false,
        "button-story2": false,
        "button-story3": false,
        "button-story4": false,
        "button-story5": false,
        "button-story6": false,
        "button-story7": true
    };
    
    switch (currentIndex) {
        case 0:
            name = "house-inside";
            elements = {
                "button-code": true,
                "button-final": true,
                "button-story0": false,
                "button-story1": false,
                "button-story2": true,
                "button-story3": true,
                "button-story4": true,
                "button-story5": true,
                "button-story6": true,
                "button-story7": true
            };
            break;
        case 1:
            name = "outside-animals";
            elements = {
                "button-code": true,
                "button-final": true,
                "button-story0": false,
                "button-story1": true,
                "button-story2": false,
                "button-story3": true,
                "button-story4": true,
                "button-story5": true,
                "button-story6": true,
                "button-story7": true
            };
            break;
        case 2:
            name = "outside-front";
            elements = {
                "button-code": true,
                "button-final": true,
                "button-story0": true,
                "button-story1": true,
                "button-story2": true,
                "button-story3": false,
                "button-story4": true,
                "button-story5": true,
                "button-story6": true,
                "button-story7": true
            };
            break;
        case 3:
            name = "door-closed-16x9";
            elements = {
                "button-code": false,
                "button-final": true,
                "button-story0": true,
                "button-story1": true,
                "button-story2": true,
                "button-story3": true,
                "button-story4": false,
                "button-story5": true,
                "button-story6": true,
                "button-story7": true
            };
            break;
        case 4:
            name = "house-inside-code";
            elements = {
                "button-code": true,
                "button-final": true,
                "button-story0": false,
                "button-story1": true,
                "button-story2": true,
                "button-story3": true,
                "button-story4": true,
                "button-story5": false,
                "button-story6": true,
                "button-story7": true
            };
            break;
        case 5:
            name = "door-open-16x9";
            index = 3;
            elements = {
                "button-code": true,
                "button-final": true,
                "button-story0": true,
                "button-story1": true,
                "button-story2": true,
                "button-story3": true,
                "button-story4": true,
                "button-story5": true,
                "button-story6": false,
                "button-story7": true
            };
            break;
        case 6:
            name = "cave-1";
            elements = {
                "button-code": true,
                "button-final": true,
                "button-story0": true,
                "button-story1": true,
                "button-story2": true,
                "button-story3": true,
                "button-story4": true,
                "button-story5": true,
                "button-story6": true,
                "button-story7": false,
            };
            break;
        case 7:
            name = "cave-2";
            elements = {
                "button-code": true,
                "button-final": true,
                "button-story0": true,
                "button-story1": true,
                "button-story2": true,
                "button-story3": true,
                "button-story4": true,
                "button-story5": true,
                "button-story6": true,
                "button-story7": false,
            };
            break;
        case 8:
            name = "cave-3";
            elements = {
                "button-code": true,
                "button-final": true,
                "button-story0": true,
                "button-story1": true,
                "button-story2": true,
                "button-story3": true,
                "button-story4": true,
                "button-story5": true,
                "button-story6": true,
                "button-story7": false,
            };
            break;
        case 9:
            name = "cave-4";
            elements = {
                "button-code": true,
                "button-final": true,
                "button-story0": true,
                "button-story1": true,
                "button-story2": true,
                "button-story3": true,
                "button-story4": true,
                "button-story5": true,
                "button-story6": true,
                "button-story7": false,
            };
            break;
        case 10:
            name = "price-chest";
            elements = {
                "button-code": true,
                "button-final": false,
                "button-story0": true,
                "button-story1": true,
                "button-story2": true,
                "button-story3": true,
                "button-story4": true,
                "button-story5": true,
                "button-story6": true,
                "button-story7": true
            };
            break;
        default:
            name = "won-screen";
            break;
    }

    for (const [key, value] of Object.entries(elements)) {
        const element = document.getElementById(key);
        if (element == null) break;
        
        if (value == false)
            element.setAttribute("class", "topbar-button");
        else
            element.setAttribute("class", "topbar-button hide");
    }

    const story = document.getElementById("story-readin");
    story.setAttribute("src", "story/" + index + ".txt")

    document.body.style.backgroundImage = "url('../img/" + name + ".png')"; }