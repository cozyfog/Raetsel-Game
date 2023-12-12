function getIframeContent(frameId) {
    const frameObj = document.getElementById(frameId);
    const frameContent = frameObj.contentWindow.document.body.innerHTML;
    alert("frame content : " + frameContent);
    return frameContent;
}

function openCode() {
    //let newWin = window.open("../Code/index.html", "Close", "width=450,height=350");
    const popup = document.getElementById("popup");
    


    if (popup.innerHTML == '')
        popup.innerHTML = '<iframe class ="inline-code" src="../Code/index.html" id="story-readin" frameborder="0" width="450px" height="350px"></iframe>';
    else
        popup.innerHTML = '';

    }

function parentwindow() {
    window.parent.document.getElementById('actions-buttons').click();
}
