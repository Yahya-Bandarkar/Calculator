let display = document.getElementById('display');

// Function to append number to the display
function appendNumber(number) {
    display.value += number;
}

// Function to append operator to the display
function appendOperator(operator) {
    display.value += operator;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete last digit
function deleteDigit() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}