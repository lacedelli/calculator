const display = document.querySelector(".screen p");



function clearDisplay(p){
	p.innerHTML = "";
}

function add(num1, num2){
	return num1 + num2;
}

function subtract(num1, num2){
	return num1 - num2;
}

function multiply(num1, num2){
	return num1 * num2;
}

function divide(num1, num2){
	return num1 / num2;
}

function operate(num1, num2, operation){
	return operation(num1, num2);
}

