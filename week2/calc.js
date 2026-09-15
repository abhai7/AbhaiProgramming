function calculate(value) {

    let display = document.getElementById("display");

    if (value == "C") {
        display.value = "";
    }
    else if (value == "=") {
        display.value = eval(display.value);
    }
    else {
        display.value = display.value + value;
    }
}
