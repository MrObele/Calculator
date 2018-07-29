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

// set an initial value of the input field
let inputValue = document.querySelector('.inputValue');
inputValue.value = '0';
let displayValues = [];

let allValues = '';

 //function to populate the display with the button number values on click
 function populateDistplay(e){
 	let buttonValue = e.target.textContent;
 	displayValues.push(buttonValue);
 	console.log(displayValues);
 	// inputValue = document.querySelector('.inputValue');
 	inputValue.value = displayValues.join('');

 	// console.log(displayValues);
 }


 //get all values to be displayed on the screen on click of the button

 let userValues = Array.from(document.querySelectorAll('.userValues'));
 userValues.forEach(key => key.addEventListener('click',populateDistplay));


 //clear the input values one at a time

 function deleteAValue(){
 	displayValues.pop();
 	inputValue.value = displayValues.join('');
 }
 let deleteVlues = document.querySelector('.deleteVlues');
 deleteVlues.addEventListener('click',deleteAValue);

//clear the screen
function clearScreen(){
	inputValue.setAttribute('style','color:black;text-align:right');
	displayValues = [];
 	inputValue.value = displayValues;
}

let clear = document.querySelector('.clear');
clear.addEventListener('click',clearScreen);


//get the final result
function displayResult(){
	try{
         allValues = eval(displayValues.join(''));
		 displayValues = [];
		 displayValues.push(allValues);
		 inputValue.value = Math.round(allValues);
	}
	catch(err){
		inputValue.setAttribute('style','color:red;text-align:center');
       inputValue.value = 'Error';
        displayValues = [];
	}
 
}

let equals = document.querySelector('.equals');
equals.addEventListener('click',displayResult);