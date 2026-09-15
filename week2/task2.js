
function calculateMarks() {

    let mark1 = Number(document.getElementById("subject1").value);
    let mark2 = Number(document.getElementById("subject2").value);
    let mark3 = Number(document.getElementById("subject3").value);
    let mark4 = Number(document.getElementById("subject4").value);
    let mark5 = Number(document.getElementById("subject5").value);
    let mark6 = Number(document.getElementById("subject6").value);
    let mark7 = Number(document.getElementById("subject7").value);
    let mark8 = Number(document.getElementById("subject8").value);

    let total = mark1 + mark2 + mark3 + mark4 +
                mark5 + mark6 + mark7 + mark8;

    let result = document.getElementById("result");

    if (total >= 600) {
        result.innerHTML = "Total: " + total + " / 800 - Distinction";
        result.style.color = "green";
    }
    else if (total >= 400) {
        result.innerHTML = "Total: " + total + " / 800 - Pass";
        result.style.color = "green";
    }
    else {
        result.innerHTML = "Total: " + total + " / 800 - Fail";
        result.style.color = "red";
    }
}
