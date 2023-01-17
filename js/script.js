//Variable for screen
 const screenDisplay = document.querySelector(".num-display");

//Variables for clear buttons
  const clearAll = document.querySelector(".ac");
  const clear = document.querySelector(".clear-button");

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
