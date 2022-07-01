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
    operator: null,
    nextNumberInputNeeded: false,
    // methods
    displayInput: () => {
        screen.innerHTML = calculator.input;
    }
};


// functions declaration

const addMoreDigits = (digit) => {
    console.log(calculator.numberInputs);
    if (!calculator.nextNumberInputNeeded) {
        calculator.input += digit;
        calculator.numberInputs[calculator.numberInputs.length - 1] = calculator.input;
    } else {
        calculator.input = digit;
        calculator.numberInputs.push(calculator.input);
        calculator.nextNumberInputNeeded = false;
    }
    calculator.displayInput();
    console.log(calculator.numberInputs);

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

const calculation = (firstNum, secondNum, operator) => {
    if (operator === "+") {
        addition(firstNum, secondNum);
    } else if (operator === "-") {
        subtraction(firstNum, secondNum);
    } else if (operator === "*") {
        multiplication(firstNum, secondNum);
    } else if (operator === "/") {
        division(firstNum, secondNum);
    }
}

const addition = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

const subtraction = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

const multiplication = (firstNum, secondNum) => {
    return firstNum * secondNum;
}

const division = (firstNum, secondNum) => {
    return firstNum / secondNum;
}

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
        case "C":
            calculator.input = "0";
            calculator.displayInput();
            calculator.input = "";
            break;
        case "Backspace":
            removeLastDigit();
            break;
        // operators
        case "+":
            calculator.operator = "+";
            calculator.nextNumberInputNeeded = true;
            break;

    
        default:
            console.log(`The selected key is ${keyInnerHTML}`);
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



// return the output and display it as an output
// handle user mouse clicks on the equal button

// reset calculator
// reset the input as 0
// reset the output as output
// handle user mouse clicks on the clear button