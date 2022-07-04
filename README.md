# CK Calculator Web App

## Description
The CK Calculator has been designed to handle basic arithmetic operations on number inputs, including addition, subtraction, multiplication and division. The project  has been divided into a few sub-goals as below:

## Design and Layout
Since it is the first iteration of creating the calculator web app, a simple and clean design has been adopted so that user can focus on testing the functionalities.

- Structure:
    -- In the HTML, a main calculator container hold all the buttons.

- Layout:
    -- The calculator container employed the Grid Layout to keep the buttons in place.
    -- Standout colour was applied to functional keys so as to help user distinguish between them and the number keys.


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



## Reset calculator

- Handle user mouse clicks on the clear button
- Reset the input and display value as 0
