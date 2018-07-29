// ===== Abasic JavaScript Calculator
// ===== By Obele David


function getKeyCode(e){
	console.log(e);
}

window.addEventListener('keydown',getKeyCode);

//functions for the basic operations

function add(firstInput,secondInput){
	if(!Number(firstInput) || !Number(secondInput)){
		return;
	}
	console.log(Number(firstInput)+  Number(secondInput));
}

function subtract(firstInput,secondInput){
	if(!Number(firstInput) || !Number(secondInput)){
		return;
	}
	console.log(Number(firstInput) - Number(secondInput));
}
function multiply(firstInput,secondInput){
	if(!Number(firstInput) || !Number(secondInput)){
		return;
	}
	console.log(Number(firstInput) * Number(secondInput));
}

function divide(firstInput,secondInput){
	if(!Number(firstInput) || !Number(secondInput)){
		return;
	}
	console.log(Number(firstInput) /  Number(secondInput));
}

//function to perform the operation
function operate(operand1, operand2, operatorType){
	switch (operatorType){
		case '+':
		   console.log(add(operand1,operand2));
		   break;
		case '-':
		   console.log(subtract(operand1,operand2));
		   break;
		case '*':
		   console.log(multiply(operand1,operand2));
		   break;
		case '/':
		   console.log(divide(operand1,operand2));
		   break;
		default:
		console.log('Enter a valid arithmetic operator');            

	}
} 
operate(2,'4','+');