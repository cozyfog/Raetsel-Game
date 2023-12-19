
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
    };
    
    switch (currentIndex) {
        case 0:
            name = "house-inside";
            elements = {
                "button-story0": false,
                "button-story1": false,
            };
            break;
        case 1:
            name = "outside-animals";
            elements = {
                "button-story0": false,
                "button-story1": true,
                "button-story2": false,
            };
            break;
        case 2:
            name = "outside-front";
            elements = {
                "button-story2": true,
                "button-story3": false,
            };
            break;
        case 3:
            name = "door-closed-16x9";
            elements = {
                "button-code": false,
                "button-story0": true,
                "button-story3": true,
                "button-story4": false,
                "button-story5": true,
            };
            break;
        case 4:
            name = "house-inside-code";
            elements = {
                "button-code": true,
                "button-story0": false,
                "button-story4": true,
                "button-story5": false,
            };
            break;
        case 5:
            name = "door-open-16x9";
            index = 3;
            elements = {
                "button-code": true,
                "button-story4": true,
                "button-story5": true,
                "button-story6": false,
            };
            break;
        case 6:
            name = "cave-1";
            elements = {
                "button-story7": false,
                "button-story7.1": false,
                "button-story7.2": false,
                "button-story7.3": false,
                "button-story6": true,
            };
            break;
        case 7:
            name = "cave-2";
            elements = {
                "button-story7.1": true,
                "button-story7.2": true,
                "button-story7.3": true,
                "button-story8.1": false,
                "button-story8.2": false,
            };
            break;
        case 8:
            name = "cave-3";
            elements = {
                "button-story8.1": true,
                "button-story8.2": true,
                "button-story9.1": false,
                "button-story9.2": false,
            };
            break;
        case 9:
            name = "cave-4";
            elements = {
                "button-story9.1": true,
                "button-story9.2": true,
                "button-story10.1": false,
                "button-story10.2": false,

            };
            break;
        case 10:
            name = "cave-5";
            elements = {
                "button-story10.1": true,
                "button-story10.2": true,
                "button-story11.1": false,
                "button-story11.2": false,

            };
            break;
        case 11:
            name = "price-chest";
            elements = {
                "button-story7": true,
                "button-story11.1": true,
                "button-story11.2": true,
                "button-final": false,
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


    for (let key in elements) {
        let button = document.getElementById(key);
        if (button) {
            if (elements[key]) {
                button.attributes.remove('hide'); // Show the button
            } else {
                button.attributes.add('hide'); // Hide the button
            }
        }
    }

