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
    // default operator: +
    operator: "+",
    nextNumberInputNeeded: false,
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
    if (!calculator.nextNumberInputNeeded) {
        calculator.input += digit;
        calculator.numberInputs.pop();
        calculator.numberInputs.push(calculator.input);
        calculator.displayInput();
    } 
    // when the user has just pressed any operator key, i.e + - * /
    else {

        // e.g  1 + 2 * 3 - 7 = 0
        // result = 1 + (2 * 3) + (-7)
        // calculator.numberInputs = [1, 6, -7]

        // e.g  8 - 8 / 2 + 3 = 7
        // result = 8 + (-8 / 2) + 3
        // calculator.numberInputs = [8, -4, 3]

        calculator.input = digit;
        calculator.displayInput();

        // subtraction
        if (calculator.operator === "-" || calculator.operator === "&#8722") {
            calculator.displayInput();
            calculator.input = String(Number(digit) * -1);
        } 
        // multiplication
        else if (calculator.operator === "*" || calculator.operator === "&#215") {
            previousNumber = calculator.numberInputs.pop();
            calculator.input = String(Number(digit) * previousNumber);
        } 
        // division
        else if (calculator.operator === "/" || calculator.operator === "&#247") {
            previousNumber = calculator.numberInputs.pop();
            calculator.input = String(previousNumber / Number(digit));
        }

        // append the number item into the numberInput array
        calculator.numberInputs.push(calculator.input);
        // reset operator
        calculator.operator = "+";
        calculator.nextNumberInputNeeded = false;

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
            calculator.input = "0";
            calculator.displayInput();
            calculator.input = "";
            calculator.numberInputs = [null];
            break;
        case "Backspace":
            removeLastDigit();
            break;

        // for operators
        case "+":
            // default calculator.operator set to "+"
            calculator.nextNumberInputNeeded = true;
            break;
        case "-":
        case "\u2212":
            calculator.operator = "-";
            calculator.nextNumberInputNeeded = true;
            break;
        case "*":
        case "\xD7":
            calculator.operator = "*";
            calculator.nextNumberInputNeeded = true;
            break;
        case "/":
        case "\xF7":
            calculator.operator = "/";
            calculator.nextNumberInputNeeded = true;
            break;
        
        // for equal sign
        // return the calculation result to the user
        // return the output and display it as an output
        case "=":
        case "Enter":
            calculator.output = String(calculateResult());
            calculator.displayResult();
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
