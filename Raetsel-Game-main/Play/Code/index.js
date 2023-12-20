function increase(id) {
    const d = document.getElementById(id);
    let n = parseInt(d.innerHTML) + 1;

    if (n < 0) {
        n = 9;
    } else if (n > 9) {
        n = 0;
    }

    d.innerHTML = n;
}

function decrease(id) {
    const d = document.getElementById(id);
    let n = parseInt(d.innerHTML) - 1;

    if (n < 0) {
        n = 9;
    } else if (n > 9) {
        n = 0;
    }

    d.innerHTML = n;
}

function submit(nums) {
    document.getElementById("code-entry-full").setAttribute("class", "hide");
    
    let code = '';

    nums.forEach((n) => {
        const d = document.getElementById(n);
        code += d.innerHTML;
        d.innerHTML = 0;
    });

    switch (code) {
        case '1109':
            gotoStory(5);
            break;
        case '2011':
            gotoStory(12);
            break;
        case '2009':
            gotoStory(13);
            break;
        default:
            if (currentIndex == 11)
            window.open('../DeathScreen/index.html', '_self');
            break;
    }
}