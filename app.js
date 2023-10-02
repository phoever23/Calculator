// the operate function 
function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};
let number1, number2, operator;
function operate (number1, operator, number2) {
    return operator(number1,number2);
};


const buttons = document.querySelectorAll("button");
let displayValue = document.querySelector(".display");

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => {number.addEventListener("click",(e) => {
    let numberChoose = parseInt(e.target.innerText);
    if (operator === undefined) {
        if (number1 === undefined) {number1 = numberChoose;
        } else {number1 = number1 * 10 + numberChoose;}    
        displayValue.innerText = number1;
    } else {
        if (number2 === undefined) {number2 = numberChoose;
        } else {number2 = number2 * 10 + numberChoose;}        
        displayValue.innerText = number2;
    }    
})    
});

const operators = document.querySelectorAll(".operator");
operators.forEach(oper => {oper.addEventListener("click",(e) => operator = e.target.value)    
});

const equal = document.querySelector("#equal");
equal.addEventListener("click",()=>{
    displayValue.innerText = operate(number1,window[operator],number2);
})

const clear = document.querySelector("#clear");
clear.addEventListener("click",()=>{
    displayValue.innerText = "";
    number1 = undefined;
    number2 = undefined;
})

