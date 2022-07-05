// adding Web interactivity:
// select an object
// create a higher order function
// attach event listener to the object
// pass in event, higher order function as parameters

// selected objects

const screen = document.querySelector(".calculator__screen");
const keys = document.querySelectorAll(".calculator__btn");

// Calculator object

// functions required (methods):
// addition
// subtraction
// multiplication
// division
// i.e a custom object maybe needed for calculator

let calculator = {
    // properties
    numberInputsArr: [null],
    preprocessingArr: [null],
    input: "",
    output: "",
    nextInputNeeded: false,
    // methods
    displayInput: () => {
        screen.innerHTML = calculator.input;
    },
    displayResult: () => {
        screen.innerHTML = calculator.output;
    }
};


// functions declaration

const addMoreInput = (newInput) => {

    // when the user is still entering a single number
    // do string concatenation
    if (!calculator.nextInputNeeded) {
        
        if (calculator.input.slice(0, 1) === "-") {
            // remove the negative sign on screen when subtracting number greater than or equal to 10
            let absoluteDigit = calculator.input.slice(1);
            absoluteDigit += newInput;
            calculator.input += newInput;
            // update the input value as the user has not finished typing the number
            calculator.numberInputsArr.pop();
            calculator.numberInputsArr.push(calculator.input);
            screen.innerHTML = absoluteDigit;
        } else {
            calculator.input += newInput;
            // update the input value as the user has not finished typing the number
            calculator.numberInputsArr.pop();
            calculator.numberInputsArr.push(calculator.input);
            calculator.displayInput();
        }

        console.log(calculator.numberInputsArr);
    } 
    // when the user has just pressed any operator key, i.e + - * /
    // stop string concatenation and move on to adding the next item to an array
    else {

        const previousInput = calculator.input;
        // console.log(`Previous input is ${previousInput}.`);
        calculator.input = newInput;

        // display input to the screen only when it is a number
        if (!isNaN(calculator.input)) {
            calculator.displayInput();
        }

        // exit the function if the previous input is an operator
        if (isNaN(previousInput) && isNaN(calculator.input)) {
            return;
        }

        calculator.numberInputsArr.push(calculator.input);
        

        // if the calculator input contains a valid number, keep do string concatenation for the next input
        if (!isNaN(calculator.input)) {
            calculator.nextInputNeeded = false;
        }

        console.log(calculator.numberInputsArr);

    }

};

const handleDataCleaning = () => {
    // starting from i = 1, 3, 5, 7... i.e looping through the operators in an array
    for (let i = 1; i < calculator.numberInputsArr.length; i+=2 ) {
        // addition
        if (calculator.numberInputsArr[i] === "+") {
            if (i === 1) {
                calculator.preprocessingArr.push(Number(calculator.numberInputsArr[0]));
            }

            if (calculator.numberInputsArr[i+2] !== "*" && calculator.numberInputsArr[i+2] !== "/" ) {
                calculator.preprocessingArr.push(Number(calculator.numberInputsArr[i+1]));
                console.log(calculator.numberInputsArr[i+2]);
            }
        }

        // subtraction
        else if (calculator.numberInputsArr[i] === "-" || calculator.numberInputsArr[i] === "\u2212") {
            if (i === 1) {
                calculator.preprocessingArr.push(Number(calculator.numberInputsArr[0]));
            }

            if (calculator.numberInputsArr[i+2] !== "*" && calculator.numberInputsArr[i+2] !== "/") {
                calculator.preprocessingArr.push(Number(calculator.numberInputsArr[i+1]) * -1);
            }

        } 
        // multiplication
        else if (calculator.numberInputsArr[i] === "*" || calculator.numberInputsArr[i] === "\xD7") {
            // do calculation with the numbers positioned at indices i-1 and i+1
            let intermediateResult = Number(calculator.numberInputsArr[i-1]) * Number(calculator.numberInputsArr[i+1]);
            
            if (calculator.numberInputsArr[i-2] === "-" || calculator.numberInputsArr[i-2] === "\u2212") {
                intermediateResult *= -1;
            }

            if (calculator.numberInputsArr[i-2] === "*" || calculator.numberInputsArr[i-2] === "\xD7") {
                // simply update the last element of the preprocessingArr if the previous operator is already a "*"
                calculator.preprocessingArr[calculator.preprocessingArr.length - 1] *= Number(calculator.numberInputsArr[i+1]);
                break;
            }

            calculator.preprocessingArr.push(intermediateResult);

        } 
        // division
        else if (calculator.numberInputsArr[i] === "/" || calculator.numberInputsArr[i] === "\xF7") {
            // do calculation with the numbers positioned at indices i-1 and i+1
            let intermediateResult = Number(calculator.numberInputsArr[i-1]) / Number(calculator.numberInputsArr[i+1]);
            
            if (calculator.numberInputsArr[i-2] === "-" || calculator.numberInputsArr[i-2] === "\u2212") {
                intermediateResult *= -1;
            }

            if (calculator.numberInputsArr[i-2] === "/" || calculator.numberInputsArr[i-2] === "\xF7") {
                // simply update the last element of the preprocessingArr if the previous operator is already a "/"
                calculator.preprocessingArr[calculator.preprocessingArr.length - 1] /= Number(calculator.numberInputsArr[i+1]);
                break;
            }
            
            calculator.preprocessingArr.push(intermediateResult);
        }
    }

    console.log(calculator.preprocessingArr);

};

const removeLastDigit = () => {
    if (calculator.input.length == 1) {
        calculator.input = "0";
        calculator.firstNum = calculator.input;
        calculator.displayInput();
        return;
    }
    calculator.input = calculator.input.slice(0, -1);
    calculator.firstNum = calculator.input;
    calculator.displayInput();
}

const calculateResult = () => {
    handleDataCleaning();
    const result = calculator.preprocessingArr.reduce((totalSum, numberItem) => {
        return totalSum + numberItem;
    });
    return result;
};

const handleInput = (keyStringValue) => {
    switch (keyStringValue) {
        // for numbers input
        case "0":
            addMoreInput("0");
            break;
        case "1":
            addMoreInput("1");
            break;
        case "2":
            addMoreInput("2");
            break;
        case "3":
            addMoreInput("3");
            break;
        case "4":
            addMoreInput("4");
            break;
        case "5":
            addMoreInput("5");
            break;
        case "6":
            addMoreInput("6");
            break;
        case "7":
            addMoreInput("7");
            break;
        case "8":
            addMoreInput("8");
            break;
        case "9":
            addMoreInput("9");
            break;
        case ".":
            // for inputting decimal number
            // only append the dot when there is not any dot
            if (!calculator.input.includes(".")) {
                addMoreInput(".");
            }
            break;

        // for functional keys
        // reset calculator
        // reset the input as 0
        // reset the output as output
        // handle user mouse clicks on the clear button
        case "C":
            // display 0
            screen.innerHTML = "0";
            // back to default setting
            calculator.input = "";
            calculator.numberInputsArr = [null];
            calculator.preprocessingArr = [null];
            break;

        case "Backspace":
            if (calculator.input == 0) {
                calculator.input = "";
            }
            if (calculator.input == "") {
                return;
            }
            removeLastDigit();
            break;

        // for operators
        case "+":
            calculator.nextInputNeeded = true;
            addMoreInput("+");
            break;

        case "-":
        case "\u2212": 
            calculator.nextInputNeeded = true;
            addMoreInput("-");
            break;

        case "*":
        case "\xD7":
            calculator.nextInputNeeded = true;
            addMoreInput("*");
            break;

        case "/":
        case "\xF7":
            calculator.nextInputNeeded = true;
            addMoreInput("/");
            break;

        case "+/-":
        case "+/\u2212":
            let lastNumber = Number(calculator.numberInputsArr.pop());
            lastNumber *= -1;
            screen.innerHTML = String(lastNumber);
            calculator.numberInputsArr.push(String(lastNumber));
            console.log(calculator.numberInputsArr);
            break;

        case "%":
        case "\u0025":
            let percentNum = Number(calculator.numberInputsArr.pop());
            percentNum /= 100;
            screen.innerHTML = String(percentNum);
            calculator.numberInputsArr.push(String(percentNum));
            break;
        // for equal sign
        // return the calculation result to the user
        // return the output and display it as an output
        case "=":
        case "Enter":
            if (calculator.numberInputsArr.includes(null)) {
                screen.innerHTML = "0";
                return;
            }
            console.log(calculator.preprocessingArr);
            calculator.output = String(calculateResult());
            calculator.displayResult();
            // memorise the previous calculation result unless the user hits the clear button
            calculator.numberInputsArr = [calculator.output];
            calculator.preprocessingArr = [null];
            break;
    
        default:
            console.log(`The selected key is ${keyStringValue}`);
    }
};


// handle user input
// display it as an input

// handle user mouse clicks on keypads
keys.forEach((key) => {
    key.addEventListener("click", (event) => {
       const keyInnerHTML = event.target.innerHTML;
       handleInput(keyInnerHTML);
    });
});

// handle user key press
document.addEventListener("keydown", (event) => {
    // event is a KeyboardEvent object, which describes a user interaction with the keyboard
    // KeyboardEvent.key returns a string representing the key value of the key represented by the event.
    const keyString = event.key;
    handleInput(keyString);
});
