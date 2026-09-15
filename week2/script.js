function sum(){
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let answer = number1 + number2;

    document.getElementById("result").innerHTML = answer;
}

function subtract(){

    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let answer = number1 - number2;

    document.getElementById("result").innerHTML = answer;

}

function multiply(){
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let answer = number1 * number2;

    document.getElementById("result").innerHTML = answer;

}