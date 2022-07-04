# CK Calculator Web App

## Description
The CK Calculator has been designed to handle basic arithmetic operations on multiple number inputs, including addition, subtraction, multiplication and division for users' daily use. The project has been divided into a few sub-goals as below:

## Design and Layout
Since it is the first iteration of creating the calculator web app, a simple and clean design has been adopted so that user can focus on testing the functionalities.

- Structure:
    - In the HTML, a main calculator container hold all the buttons.

- Layout:
    - The calculator container employed the Grid Layout to keep the buttons in place.
    - Standout colour was applied to functional keys so as to help user distinguish between them and the number keys.


## Handle user input

- Handle user mouse clicks on keypads
- Handle user key press
- Display it as an input


## Perform calculation

- Store the following variables (properties):
    - First number
    - Operator
    - Second number
    - More operator and number inputs

- Functions required (methods):
    - Perform calculations
    - Display Input to user
    - Display Output to user


Based on this requirement, a calculator object would be useful to handle data and improve readibility and maintainability from the development point of view:

```
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

```

To handle multiple number and operator inputs in a normal day-to-day calculation, array was chosen as the data structure to handle user inputs. 


## Algorithm used in the calculator
Taking the precedence rules in arithmetic operations into considerations, the order of calculations plays a big role in giving the correct output. Therefore, operators should allow different orders of execution. As shown in the following examples, multiplication and division should go first in a calculation. Addition and subtraction can be thought as the same operation, as subtracting a number means adding a negative number. Besides, multiplication and division are also similar as dividing a number means multiplying a fraction.

```
// example 1
// e.g  1 + 2 * 3 - 7 = 0
// result = 1 + (2 * 3) + (-7)

// example 2
// e.g  8 - 8 / 2 + 3 = 7
// result = 8 + (-8 / 2) + 3

// example 3
// e.g 2 - 10 = -8
// result = 2 + (-10)

// example 4
// e.g 6 * 32 = 192

```

So, with a mean of storing both the number and operators input in an array, calculation was broken down into sub-calculations, by doing mmultiplication and division first and keeping track of the intermediate result in the array:

```
// example 1
// calculator.numberInputsArr = ["1", "+", "2", "*", "3", "-", "7"];
// calculator.preprocessingArr = [1, 6, -7];

// example 2
// calculator.numberInputsArr = ["8", "-", "8", "/", "2", "+", "3"];
// calculator.preprocessingArr = [8, -4, 3];
```

Based on the number preprocessing array, a high order function in array iterator, i.e a reduce function, was used to increment all the numbers in the array and return the final result as the output of the calculation.

The calculation can also handle double or more digit numbers. When the user keeps putting a number string by using their mouse or keyboard, string concatenation ensures it gets the right input. Once the user type operator like "+", "-", "*", "/", string concatenation stops and it moves on to add the input to the next item in the array.

## Reset calculator

- Handle user mouse clicks on the clear button
- Reset the input and display value as 0
