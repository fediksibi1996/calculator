let firstNumber = "noNumber";
let secondNumber = "noNumber";
let displayNumber = 0;
let buttonValue = 0;
let currentValue = 0;
let mathFunction = "";
let answer = 0;
let clearDisplay = -1;
let sum = 0
let displayValue = 0;
let includesDecimal = "";

function add(firstNumber,secondNumber) {
    sum = firstNumber+secondNumber;
}

function subtract(firstNumber,secondNumber) {
    sum = firstNumber-secondNumber;
}

function multiply(firstNumber,secondNumber) {
    sum = firstNumber*secondNumber;
}

function divide(firstNumber,secondNumber) {
    sum = firstNumber / secondNumber;
}


function clearTotal() {
    sum === 0;
}


function operate(firstNumber,secondNumber,mathFunction) {
    if (mathFunction === "add") {
        add(firstNumber,secondNumber);
    } else if (mathFunction === "subtract") {
        subtract(firstNumber,secondNumber);
    } else if (mathFunction === "multiply") {
        multiply(firstNumber,secondNumber);
    } else if (mathFunction === "divide" && secondNumber === 0) {
        displayElement.textContent = displayNumber;
        alert("Imagine that you have zero cookies and you split them evenly among friends. How many cookies does each person get? See? It doesn't make sense. ");
    } else if (mathFunction === "divide") {
        divide(firstNumber,secondNumber);
    } else if (mathFunction === "clearTotal") {
        clearTotal()
    } else {
    }
 }
 function concatNumbers() {
    displayElement = document.getElementById("displayScreen");
    displayNumber = displayElement.textContent;
    buttonValue = this.textContent;
    decimal.disabled = false;
    decimalCheck
    if (displayNumber === "0") {
      displayElement.textContent = buttonValue;
      currentValue = Number(displayNumber + buttonValue);
    } else if (clearDisplay === 1 && displayNumber.length < 9) {
        displayNumber = ""
        currentValue = 0;
        clearDisplay = -1;
        displayElement.textContent = displayNumber + buttonValue;
        currentValue = Number(displayNumber + buttonValue);
    } else if (displayNumber.length < 9) { 
    displayElement.textContent = displayNumber + buttonValue;
    currentValue = Number(displayNumber + buttonValue);
    } else {
    }
}