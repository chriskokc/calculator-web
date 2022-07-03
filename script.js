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
    numberInputs: [null],
    input: "",
    output: "",
    operator: "",
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

const addMoreDigits = (digit) => {

    // when the user is still entering a single number
    // do string concatenation
    if (!calculator.nextInputNeeded) {
        
        if (calculator.input.slice(0, 1) === "-") {
            // remove the negative sign on screen when subtracting number greater than or equal to 10
            let absoluteDigit = calculator.input.slice(1);
            absoluteDigit += digit;
            calculator.input += digit;
            // update the input value as the user has not finished typing the number
            calculator.numberInputs.pop();
            calculator.numberInputs.push(calculator.input);
            screen.innerHTML = absoluteDigit;
        } else {
            calculator.input += digit;
            // update the input value as the user has not finished typing the number
            calculator.numberInputs.pop();
            calculator.numberInputs.push(calculator.input);
            calculator.displayInput();
        }

        console.log(calculator.numberInputs);
    } 
    // when the user has just pressed any operator key, i.e + - * /
    // stop string concatenation and move on to adding the next item to an array
    else {

        // e.g  1 + 2 * 3 - 7 = 0
        // result = 1 + (2 * 3) + (-7)
        // calculator.numberInputs = [1, 6, -7]

        // e.g  8 - 8 / 2 + 3 = 7
        // result = 8 + (-8 / 2) + 3
        // calculator.numberInputs = [8, -4, 3]

        // e.g 2 - 10 = -8
        // result = 2 + (-10)
        // calculator.numberInputs = [2, -10]

        // e.g 6 * 32 = 192
        // calculator.numberInputs = [192]

        
        const previousInput = calculator.input;
        console.log(`Previous input is ${previousInput}.`);
        calculator.input = digit;

        // display input to the screen only when it is a number
        if (!isNaN(calculator.input)) {
            calculator.displayInput();
        }

        // addition
        if (calculator.operator === "+") {
            console.log("Operator inserted");
        }
        // subtraction
        else if (calculator.operator === "-" || calculator.operator === "\u2212") {
            console.log("Operator inserted");
        } 
        // multiplication
        else if (calculator.operator === "*" || calculator.operator === "\xD7") {
            console.log("Operator inserted");
           
        } 
        // division
        else if (calculator.operator === "/" || calculator.operator === "\xF7") {
            console.log("Operator inserted");
            
        }

        // exit the function if the previous input is an operator
        if (isNaN(previousInput) && isNaN(calculator.input)) {
            return;
        }

        calculator.numberInputs.push(calculator.input);
        

        // if the calculator input contains a valid number, keep do string concatenation for the next input
        if (!isNaN(calculator.input)) {
            calculator.nextInputNeeded = false;
        }


        console.log(calculator.numberInputs);

    }

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
    const result = calculator.numberInputs.reduce((totalSum, numberItem) => {
        return Number(totalSum) + Number(numberItem);
    });
    return result;
};

const handleInput = (keyStringValue) => {
    switch (keyStringValue) {
        // for numbers input
        case "0":
            addMoreDigits("0");
            break;
        case "1":
            addMoreDigits("1");
            break;
        case "2":
            addMoreDigits("2");
            break;
        case "3":
            addMoreDigits("3");
            break;
        case "4":
            addMoreDigits("4");
            break;
        case "5":
            addMoreDigits("5");
            break;
        case "6":
            addMoreDigits("6");
            break;
        case "7":
            addMoreDigits("7");
            break;
        case "8":
            addMoreDigits("8");
            break;
        case "9":
            addMoreDigits("9");
            break;
        case ".":
            // for inputting decimal number
            // only append the dot when there is not any dot
            if (!calculator.input.includes(".")) {
                addMoreDigits(".");
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
            calculator.numberInputs = [null];
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
            calculator.operator = "+";
            calculator.nextInputNeeded = true;
            addMoreDigits("+");
            break;
        case "-":
        case "\u2212": 
            calculator.operator = "-";
            calculator.nextInputNeeded = true;
            addMoreDigits("-");
            break;
        case "*":
        case "\xD7":
            calculator.operator = "*";
            calculator.nextInputNeeded = true;
            addMoreDigits("*");
            break;
        case "/":
        case "\xF7":
            calculator.operator = "/";
            calculator.nextInputNeeded = true;
            addMoreDigits("/");
            break;
        case "+/-":
        case "+/\u2212":
            calculator.numberInputs[calculator.numberInputs.length - 1] *= -1;
            screen.innerHTML = calculator.numberInputs[calculator.numberInputs.length - 1];
            console.log(calculator.numberInputs);
        
        // for equal sign
        // return the calculation result to the user
        // return the output and display it as an output
        case "=":
        case "Enter":
            if (calculator.numberInputs.includes(null)) {
                screen.innerHTML = "0";
                return;
            } 
            calculator.output = String(calculateResult());
            calculator.displayResult();
            // memorise the previous calculation result unless the user hits the clear button
            calculator.numberInputs = [calculator.output];
            console.log(calculator.numberInputs);
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
