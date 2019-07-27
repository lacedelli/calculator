const display = document.querySelector(".screen p");
let operationString = "";

// event listener for numpad buttons
const numpad = document.querySelectorAll(".number");
numpad.forEach((button) => { 
	button.addEventListener("click", (event) => {
		let number = event.target.dataset.number;
		display.innerHTML += number;
		operationString += number;
	});
});
	

// Event listener for all the operator buttons
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
		let operationArray = operationString.split(" ");
		
		operationString = solveExpression(operationArray);
		display.innerHTML = operationString;
		 
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

function solveExpression(operationArray){
	
	// If the array consists of only one value, it's done!
	if(operationArray.length === 1){
		return operationArray.toString();
	}
	for(let i = 0; i < operationArray.length; i++){
		let current = operationArray[i]; 
		// Checks current iteration is an operator
		if(checkOperator(current)){
			let operandA = Number(operationArray[i-1]);
			let operandB = Number(operationArray[i+1]);
			// for each case, solves operation, and creates new array
			// with the remainder of the chain, inserting result at [0]
			// recurses afterwards
			if(current === "+"){
				let result = operate(operandA,operandB,add);
				let operated = operationArray.slice(i+2);
				operated.unshift(result);
				return solveExpression(operated);
			} else if(current === "-") {
				let result = operate(operandA,operandB,subtract);
				let operated = operationArray.slice(i+2);
				operated.unshift(result);
				return solveExpression(operated);
			} else if(current === "*") {
				let result = operate(operandA,operandB,multiply);
				let operated = operationArray.slice(i+2);
				operated.unshift(result);
				return solveExpression(operated);
			} else if(current === "/") {
				let result = operate(operandA,operandB,divide);
				let operated = operationArray.slice(i+2);
				operated.unshift(result);
				return solveExpression(operated);
			}
		}
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

