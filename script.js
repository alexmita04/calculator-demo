const displayScreen = document.querySelector(".calculator-screen");
const numberButtons = document.querySelectorAll(".btn-number");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalButton = document.querySelector(".equals-btn");
const clearButton = document.querySelector(".c-btn");

const ADD_OPERATOR = "+";
const SUBTRACT_OPERATOR = "-";
const MULTIPLY_OPERATOR = "x";
const DIVIDE_OPERATOR = "/";
const EQUAL_OPERATOR = "=";

let displayValue = 0;
let lastInputNum = "";
let inputNum = "";
let currentOperator;
let result;

function log() {
  console.log("display value", displayValue);
  console.log("lastinput", lastInputNum);
  console.log("input", inputNum);
  console.log("current operator", currentOperator);
  console.log("result", result);
}

numberButtons.forEach((numBtn) =>
  numBtn.addEventListener("click", getUserNumber)
);
operatorButtons.forEach((operatorBtn) =>
  operatorBtn.addEventListener("click", getOperator)
);

equalButton.addEventListener("click", () => {
  displayOnScreen(result);
});

clearButton.addEventListener("click", clearEventHandler);

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  num1 = parseFloat(parseFloat(num1).toFixed(2));
  num2 = parseFloat(parseFloat(num2).toFixed(2));
  if (operator === ADD_OPERATOR) result = add(num1, num2);
  else if (operator === SUBTRACT_OPERATOR) result = subtract(num1, num2);
  else if (operator === MULTIPLY_OPERATOR) result = multiply(num1, num2);
  else if (operator === DIVIDE_OPERATOR) result = divide(num1, num2);
  result = parseFloat(result.toFixed(2));
}

function getUserNumber(e) {
  if (inputNum === null) inputNum = e.target.textContent;
  else inputNum += e.target.textContent;
  displayOnScreen(inputNum);
  if (lastInputNum) {
    operate(currentOperator, lastInputNum, inputNum);
  }
}

function displayOnScreen(inputDisplay, e) {
  displayScreen.textContent = inputDisplay;
}

function getOperator(e) {
  if (e.target.textContent === ADD_OPERATOR) currentOperator = ADD_OPERATOR;
  else if (e.target.textContent === SUBTRACT_OPERATOR)
    currentOperator = SUBTRACT_OPERATOR;
  else if (e.target.textContent === MULTIPLY_OPERATOR)
    currentOperator = MULTIPLY_OPERATOR;
  else if (e.target.textContent === DIVIDE_OPERATOR)
    currentOperator = DIVIDE_OPERATOR;

  if (lastInputNum) {
    lastInputNum = result;
    inputNum = "";
  } else {
    lastInputNum = inputNum;
    inputNum = "";
  }

  clearContentDisplay();
}

function clearContentDisplay() {
  displayScreen.textContent = "";
}

function clearEventHandler() {
  clearContentDisplay();
  result = null;
  lastInputNum = null;
  inputNum = null;
}
