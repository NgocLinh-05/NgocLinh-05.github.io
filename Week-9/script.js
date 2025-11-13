function calculate() {

    var a = document.calcForm.txta.value;
    var b = document.calcForm.txtb.value;
    var operator = document.calcForm.sltO.value;
    var result;

    if(a == "" || b == "") {
        alert("Please enter both numbers");
        result = ""
        return;
    }
    a = parseFloat(a);
    b = parseFloat(b);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numbers");
        result = ""
        return;
    }

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        if (b === 0) {
            alert("Cannot divide by zero");
            return;
        } else  
        result = a / b;
    } else if (operator === "%") {
        result = a % b;
    } else if (operator === "^") {
        result = Math.pow(a, b);
    } else {
        result = "Invalid operator";
    }

    // getElementById to display result
    // document.getElementById("lblResult").innerText = result;
    document.calcForm.txtr.value = result;
}