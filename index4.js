function add() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultArea = document.getElementById("result");

    // Check if inputs are empty or not numbers
    if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
        resultArea.textContent = "Please enter valid numbers!";
        return;
    }

    // Convert to numbers and calculate
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const result = number1 + number2;
    resultArea.textContent = `Result: ${result}`;
}

function subtract() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultArea = document.getElementById("result");

    if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
        resultArea.textContent = "Please enter valid numbers!";
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const result = number1 - number2;
    resultArea.textContent = `Result: ${result}`;
}

function multiply() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultArea = document.getElementById("result");

    if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
        resultArea.textContent = "Please enter valid numbers!";
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const result = number1 * number2;
    resultArea.textContent = `Result: ${result}`;
}

function divide() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultArea = document.getElementById("result");

    if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
        resultArea.textContent = "Please enter valid numbers!";
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Check for division by zero
    if (number2 === 0) {
        resultArea.textContent = "Cannot divide by zero!";
        return;
    }

    const result = number1 / number2;
    resultArea.textContent = `Result: ${result}`;
}