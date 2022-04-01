var operator = prompt("Plesese, enter the operation to perform: ");

var firstNumber = Number(prompt("Enter the first number: "));
var secondNumber = Number(prompt("Enter the second number: "));

if (operator === "add" || operator === "Add") {
  var sum = firstNumber + secondNumber;
  alert("The sum of the two numbers is: " + sum);
} else if (operator === "subtract" || operator === "Subtract") {
  var diff = Math.abs(secondNumber - firstNumber);
  alert("The absolute difference between the two numbers is: " + diff);
} else if (operator === "multiply" || operator === "Multiply") {
  var product = firstNumber * secondNumber;
  alert("The product of the two numbers is: " + product);
} else if (operator === "divide" || operator === "Divide") {
  var div = firstNumber / secondNumber;
  alert("The quotient of the two numbers is: " + div);
} else {
  alert("Invalid input");
}