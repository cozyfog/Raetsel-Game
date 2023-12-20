
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

function getStoryIndex() {
    return currentIndex;
}

function gotoStory(index) { 

    let name = "";
    currentIndex = index;

    let elements = {
        "button-code": true,
        "button-final": true,
        "button-final-death": true,
        "button-story0": true,
        "button-story1": true,
        "button-story1.5": true,
        "button-story2": true,
        "button-story3": true,
        "button-story4": true,
        "button-story5": true,
        "button-story6": true,
        "button-story7" : true,
        "button-story7.1": true,
        "button-story7.2": true,
        "button-story7.3": true,
        "button-story8.1": true,
        "button-story8.2": true,
        "button-story9.2": true,
        "button-story9.1": true,
        "button-story10.1": true,
        "button-story10.2": true,
        "button-story11.2": true,
        "button-story11.1": true,
    };
    
    switch (currentIndex) {
        case 0:
            name = "house-inside";
            elements["button-story0"] = false;
            elements["button-story1"] = false;
            break;
        case 1:
            name = "outside-animals";
            elements["button-story0"] = false;
            elements["button-story1.5"] = false;
            break;
        case 1.5:
            name = "village";
            elements["button-story2"] = false;
            break;
        case 2:
            name = "outside-front";
            elements["button-story3"] = false;
            break;
        case 3:
            name = "door-closed-16x9";
            elements["button-code"] = false;
            elements["button-story4"] = false;
            break;
        case 4:
            name = "house-inside-code";
            elements["button-story0"] = false;
            elements["button-story5"] = false;
            break;
        case 5:
            name = "door-open-16x9";
            index = 3;
            elements["button-story6"] = false;
            break;
        case 6:
            name = "cave-1";
            elements["button-story7"] = false;
            elements["button-story7.1"] = false;
            elements["button-story7.2"] = false;
            elements["button-story7.3"] = false;
            break;
        case 7:
            name = "cave-2";
            elements["button-story7"] = false;
            elements["button-story8.1"] = false;
            elements["button-story8.2"] = false;
            break;
        case 8:
            name = "cave-3";
            elements["button-story7"] = false;
            elements["button-story9.1"] = false;
            elements["button-story9.2"] = false;
            break;
        case 9:
            name = "cave-4";
            elements["button-story7"] = false;
            elements["button-story10.1"] = false;
            elements["button-story10.2"] = false;
            break;
        case 10:
            name = "cave-5";
            elements["button-story7"] = false;
            elements["button-story11.1"] = false;
            elements["button-story11.2"] = false;
            break;
        case 11:
            name = "chose-chest";
            elements["button-code"] = false;
            break;
        case 12:
            name = "price-chest";
            elements["button-final"] = false;
            break;
        case 13:
            name = "herobrine-front";
            elements["button-final-death"] = false;
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
    
    document.body.style.backgroundImage = "url('../img/" + name + ".png')";
}