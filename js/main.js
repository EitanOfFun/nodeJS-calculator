function appendToTextBox(text) {
    document.getElementById('text-box').value += text;
}
function btn_7() {
    appendToTextBox(7);
}

function btn_8() {
    appendToTextBox(8);
}

function btn_9() {
    appendToTextBox(9);
}

function btn_divide() {
    appendToTextBox(" / ");
}

function btn_4() {
    appendToTextBox(4);
}

function btn_5() {
    appendToTextBox(5);
}

function btn_6() {
    appendToTextBox(6);
}

function btn_multiply() {
    appendToTextBox(" * ");
}

function btn_1() {
    appendToTextBox(1);
}

function btn_2() {
    appendToTextBox(2);
}

function btn_3() {
    appendToTextBox(3);
}

function btn_minus() {
    appendToTextBox(" - ");
}

function btn_0() {
    appendToTextBox(0);
}

function btn_point() {
    appendToTextBox(".");
}

function btn_plus() {
    appendToTextBox(" + ");
}

function btn_mod() {
    appendToTextBox(" % ");
}
function btn_clear() {
    document.getElementById('text-box').value = "";
}

function btn_equals() {
    var textBox = document.getElementById('text-box').value;
    document.getElementById('text-box').value = eval(textBox);
}

function btn_backspace() {
    var textBox = document.getElementById('text-box').value;
    document.getElementById('text-box').value = textBox.slice(0, -1);
}

