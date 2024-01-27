/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = function() {
    let subNumber1 = Number(document.querySelector('#dividend').value);
    let subNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(subNumber1, subNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click", () => {
    let checkbox = document.querySelector("#member");
    let subtotal = document.querySelector("#subtotal").value;

    if (checkbox.checked == true) {
        subtotal -= (subtotal * 0.2);
        let subDecimal = (Math.round(subtotal * 100) / 100).toFixed(2);
        document.querySelector("#total").textContent = `$${subDecimal}`;
    }
    else {
        let subDecimal = (Math.round(subtotal * 100) / 100).toFixed(2);
        document.querySelector("#total").textContent = `$${subDecimal}`;
    }
})

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector("#array").textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 != 0);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map((number) => number *2);

/* Output Sum of Multiplied by 2 Array */
const multiplyAndSum = (array) => array.map((number) => number *2).reduce((sum, number) => sum + number);
document.querySelector("#sumOfMultiplied").innerHTML = multiplyAndSum(numbersArray);
