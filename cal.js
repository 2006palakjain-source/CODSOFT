function display(val) {
    document.getElementById("textval").value += val;
}

function clr() {
    document.getElementById("textval").value = "";
}

function Calculate() {
    try {
        let result = eval(document.getElementById("textval").value);
        document.getElementById("textval").value = result;
    } catch (error) {
        document.getElementById("textval").value = "Error";
        setTimeout(() => {
            document.getElementById("textval").value = "";
        }, 1500);
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9' || key === '.') {
        display(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        display(key);
    } else if (key === 'Enter' || key === '=') {
        Calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        document.getElementById("textval").value = "";
    }
});
