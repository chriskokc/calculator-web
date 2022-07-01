// adding Web interactivity:
// select an object
// create a higher order function
// attach event listener to the object
// pass in event, higher order function as parameters

// functions declaration
const buttonGotClicked = () => {
    console.log("Button got clicked");
};

const handleInput = (keyInnerHTML) => {
    switch (keyInnerHTML) {
        // for numbers input
        case "0":
            inputDisplay.innerHTML = "0";
            break;
        case "1":
            inputDisplay.innerHTML = "1";
            break;
        case "2":
            inputDisplay.innerHTML = "2";
            break;
        case "3":
            inputDisplay.innerHTML = "3";
            break;
        case "4":
            inputDisplay.innerHTML = "4";
            break;
        case "5":
            inputDisplay.innerHTML = "5";
            break;
        case "6":
            inputDisplay.innerHTML = "6";
            break;
        case "7":
            inputDisplay.innerHTML = "7";
            break;
        case "8":
            inputDisplay.innerHTML = "8";
            break;
        case "9":
            inputDisplay.innerHTML = "9";
                break;

        // for functional keys
    
        default:
            console.log(`The selected key is ${keyInnerHTML}`);
    }
};


// handle user input
// handle user mouse clicks on keypads
// handle user key press
// display it as an input

const inputDisplay = document.querySelector(".calculator__input");
const keys = document.querySelectorAll(".calculator__btn");


keys.forEach((key) => {
    key.addEventListener("click", (event) => {
       const keyInnerHTML = event.target.innerHTML;
       handleInput(keyInnerHTML);
    });
});



// perform calculation
// store the following variables (properties):
// first number
// operator
// second number

// functions required (methods):
// addition
// subtraction
// multiplication
// division
// i.e a custom object maybe needed for calculator

// return the output and display it as an output
// handle user mouse clicks on the equal button

// reset calculator
// reset the input as 0
// reset the output as output
// handle user mouse clicks on the clear button