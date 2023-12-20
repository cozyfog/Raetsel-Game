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
    let code = '';

    nums.forEach((n) => {
        const d = document.getElementById(n);
        code += d.innerHTML;
    });

    switch (code) {
        case '1987':
            alert('har har har har har har har har har har har har har har har har har har');
            break;
        default:
            alert('L');
            break;
    }
}