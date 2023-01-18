//Variable for screen
 const screenDisplay = document.querySelector(".num-display");

//Variables for clear buttons
  const clearAll = document.querySelector(".ac");
  const backspace = document.querySelector(".backspace");

//Variables for number buttons
  const oneButton = document.querySelector(".one");
  const twoButton = document.querySelector(".two");
  const threeButton = document.querySelector(".three");
  const fourButton = document.querySelector(".four");
  const fiveButton = document.querySelector(".five");
  const sixButton = document.querySelector(".six");
  const sevenButton = document.querySelector(".seven");
  const eightButton = document.querySelector(".eight");
  const nineButton = document.querySelector(".nine");
  const zeroButton = document.querySelector(".zero");
  const decimalButton = document.querySelector(".decimal");

//Variables for operator buttons
  const addButton = document.querySelector(".plus");
  const subtractButton = document.querySelector(".minus");
  const multiplyButton = document.querySelector(".multiply");
  const divideButton = document.querySelector('.divide');
  const equalsButton = document.querySelector(".equals");

//==============================================================

//Functions and events for populating screen

let displayArray = [];

const updateDisplay = function () {
  let displayString = displayArray.join("");
  screenDisplay.innerText = `${displayString}`;
}

oneButton.addEventListener("click", function () {
  displayArray.push("1");
  updateDisplay();
})

twoButton.addEventListener("click", function () {
  displayArray.push("2");
  updateDisplay();
})

threeButton.addEventListener("click", function () {
  displayArray.push("3");
  updateDisplay();
})

fourButton.addEventListener("click", function () {
  displayArray.push("4");
  updateDisplay();
})

fiveButton.addEventListener("click", function () {
  displayArray.push("5");
  updateDisplay();
})

sixButton.addEventListener("click", function () {
  displayArray.push("6");
  updateDisplay();
})

sevenButton.addEventListener("click", function () {
  displayArray.push("7");
  updateDisplay();
})

eightButton.addEventListener("click", function() {
  displayArray.push("8");
  updateDisplay();
})

nineButton.addEventListener("click", function () {
  displayArray.push("9");
  updateDisplay();
  console.log(displayArray);
})

zeroButton.addEventListener("click", function() {
  displayArray.push("0");
  updateDisplay();
})

decimalButton.addEventListener("click", function () {
  displayArray.push(".");
  updateDisplay();
})

document.addEventListener("keydown", function (e) {
  if (e.key === "0") {
    displayArray.push("0");
  } else if (e.key === "1") {
    displayArray.push("1");
  } else if (e.key === "2") {
    displayArray.push("2");
  } else if (e.key === "3") {
    displayArray.push("3");
  } else if (e.key === "4") {
    displayArray.push("4");
  } else if (e.key === "5") {
    displayArray.push("5");
  } else if (e.key === "6") {
    displayArray.push("6");
  } else if (e.key === "7") {
    displayArray.push("7");
  } else if (e.key === "8") {
    displayArray.push("8");
  } else if (e.key === "9") {
    displayArray.push("9");
  } else if (e.key === ".") {
    displayArray.push(".");
  } else {
    return displayArray;
  }

  updateDisplay();
})

//==============================================================

//Functions and event handlers for operator buttons
let firstNum;
let secondNum;
let operator;

const storeFirstNum = function () {
  firstNum = Number(displayArray.join(""));
  displayArray = [];
}

addButton.addEventListener("click", function () {
  storeFirstNum();
  operator = "add";
})

subtractButton.addEventListener("click", function () {
  storeFirstNumber();
  operator = "subtract";
})

multiplyButton.addEventListener("click", function () {
  storeFirstNumber();
  operator = "multiply";
})

divideButton.addEventListener("click", function () {
  storeFirstNumber();
  operator = "divide";
})

document.addEventListener("keydown", function (e) {
  if (e.key === "+") {
    storeFirstNumber();
    operator = "add";
  } else if (e.key === "-") {
    storeFirstNumber();
    operator = "subtract";
  } else if (e.key === "*") {
    storeFirstNumber();
    operator = "multiply";
  } else if (e.key === "/") {
    storeFirstNumber();
    operator = "divide";
  } else {
    return displayArray;
  }
})

//==============================================================

//Functions to clear screen

clearAll.addEventListener("click", function () {
  displayArray = [];
  screenDisplay.innerText = "0";
  firstNum = 0;
  secondNum = 0;
  operator = null;
})

const backspaceFunction = function () {
  if (displayArray.length <= 1) {
    screenDisplay.innerText = "0";
  } else {
    displayArray.pop();
    updateDisplay();
  }
}

backspace.addEventListener("click", function () {
  backspaceFunction();
})

document.addEventListener("keydown", function (e) {
  if (e.key === "Backspace") {
    backspaceFunction();
  }
})

//==============================================================

//Basic math functions

const add = function (num1, num2) {
  return num1 + num2;
}

const subtract = function (num1, num2) {
  return num1 - num2;
}

const multiply = function (num1, num2) {
  return num1 * num2;
}

const divide = function (num1, num2) {
  if (num2 === 0) {
    return "UM...";
  } else {
    return num1 / num2;
  }
}
