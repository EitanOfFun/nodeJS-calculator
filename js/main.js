function clickBtn(btn) {
    // if btn is equals
    if (btn === '='){
        document.getElementById('text-box').value = eval(document.getElementById('text-box').value);
    }
    // if btn is backspace 
    else if (btn === '<'){
        document.getElementById('text-box').value = document.getElementById('text-box').value.slice(0, -1);
    }
    // if btn is clear
    else if (btn === 'C'){
        document.getElementById('text-box').value = "";
    }
    // if btn is operator (not a number AND not a period) - add a space on either side
    else if (typeof(btn) !== "number" && btn !== "."){
        document.getElementById('text-box').value += " " + btn + " ";
    }
    // btn is a number
    else {
        document.getElementById('text-box').value += btn;
    }
}

