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