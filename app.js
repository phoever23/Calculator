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

function operate (number1, operator, number2) {
    return operator(number1,number2);
};

let operator, accumulator,currentValue;
let displayValue = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");

numbers.forEach(number => {number.addEventListener("click",(e) => {
    let numberChoose = Number(e.target.innerText);
    if (!operator) { // user entering first number
        !accumulator ? accumulator = numberChoose : accumulator = accumulator * 10 + numberChoose;  
        displayValue.innerText = accumulator;
    } else {             
        !currentValue ? currentValue = numberChoose : currentValue = currentValue * 10 + numberChoose;
        displayValue.innerText = currentValue;
        accumulator = operate(accumulator,window[operator],currentValue);        
    }    
})    
});
    
operators.forEach(oper => {oper.addEventListener("click",(e) => {
    operator = e.target.value;
    currentValue = undefined;
})    
});

equal.addEventListener("click",()=>{
    displayValue.innerText = accumulator;    
})

const clear = document.querySelector("#clear");
clear.addEventListener("click",()=>{
    displayValue.innerText = "";  
    accumulator = undefined;
    currentValue = undefined;
    operator = undefined;
})

