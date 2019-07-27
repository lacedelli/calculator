const display = document.querySelector(".screen p");
let operationString = "";

// event listener that adds a number to the screen for
// each number pressed
const numpad = document.querySelectorAll(".number");
numpad.forEach((button) => { 
	button.addEventListener("click", (event) => {
		let number = event.target.dataset.number;
		display.innerHTML += number;
		operationString += number;
	});
});
	

//TODO add an even listener for all the operator buttons
const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
	button.addEventListener("click", (event) => {
		processOperators(event); 
	});
});

function clearDisplay(p){
	p.innerHTML = "";
	operationString = "";
}

function processOperators(event) {
	let operator = event.target.dataset.operation;
	if(operator === "="){
		// TODO add evaluation logic
		let operationArray = operationString.split(" ");
		console.log("split string into", operationArray);
		let result = 0;
		for(let i = 0; i < operationArray.length; i++){
			let current = operationArray[i]; 
			if(checkOperator(current)){
				let operandA = Number(operationArray[i-1]);
				let operandB = Number(operationArray[i+1]);
				if(current === "+"){
					result = operate(operandA,operandB,add);
				} else if(current === "-") {
					result = operate(operandA,operandB,subtract);
				} else if(current === "*") {
					result = operate(operandA,operandB,multiply);
				} else if(current === "/") {
					result = operate(operandA,operandB,divide);
				}
			} 
			display.innerHTML = result;
		}
	//} else if() { // TODO add case for user trying to divide by zero
		// TODO  
	} else {
		display.innerHTML += ` ${operator} `;
		operationString += ` ${operator} `; 
	}
}

function checkOperator(tested){
	if(tested === "+" || tested === "-" || tested === "*" || tested === "/"){
		return true;
	}
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

