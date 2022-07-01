// adding Web interactivity:
// select an object
// create a higher order function
// attach event listener to the object
// pass in event, higher order function as parameters

// selected objects

const inputDisplay = document.querySelector(".calculator__input");
const keys = document.querySelectorAll(".calculator__btn");

// Calculator object

// functions required (methods):
// addition
// subtraction
// multiplication
// division
// i.e a custom object maybe needed for calculator

let calculator = {
    firstNumber: "",
    secondNumber: null,
    operator: null,

    displayInput: () => {
        inputDisplay.innerHTML = calculator.firstNumber;
    }
};


// functions declaration

const addMoreDigits = (digit) => {
    calculator.firstNumber += digit;
    calculator.displayInput();
};


const handleInputClick = (keyInnerHTML) => {
    switch (keyInnerHTML) {
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
            if (calculator.firstNumber.slice(-1) !== ".") {
                addMoreDigits(".");
            }
            break;


        // for functional keys
        case "C":
            calculator.firstNumber = "0";
            calculator.displayInput();
            calculator.firstNumber = "";
            break;
    
        default:
            console.log(`The selected key is ${keyInnerHTML}`);
    }
};


// handle user input
// handle user mouse clicks on keypads
// handle user key press
// display it as an input

keys.forEach((key) => {
    key.addEventListener("click", (event) => {
       const keyInnerHTML = event.target.innerHTML;
       handleInputClick(keyInnerHTML);
    });
});




// return the output and display it as an output
// handle user mouse clicks on the equal button

// reset calculator
// reset the input as 0
// reset the output as output
// handle user mouse clicks on the clear button