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
let number1, number2, operator, accumulator,currentValue;
function operate (number1, operator, number2) {
    return operator(number1,number2);
};

let displayValue = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");

numbers.forEach(number => {number.addEventListener("click",(e) => {
    let numberChoose = Number(e.target.innerText);
    if (operator === undefined) { // user entering first number
        number1 === undefined ? number1 = numberChoose : number1 = number1 * 10 + numberChoose;  
        displayValue.innerText = number1;
    } else {
        if (!accumulator) {
            number2 === undefined ? number2 = numberChoose : number2 = number2 * 10 + numberChoose;     
            displayValue.innerText = number2;
            accumulator = operate(number1,window[operator],number2);
        } else {
            currentValue === undefined ? currentValue = numberChoose : currentValue = currentValue * 10 + numberChoose;
            displayValue.innerText = currentValue;
            accumulator = operate(accumulator,window[operator],currentValue);
        }
    }    
})    
});
    
operators.forEach(oper => {oper.addEventListener("click",(e) => {
    operator = e.target.value;
    currentValue = undefined;
}
)    
});

equal.addEventListener("click",()=>{
    displayValue.innerText = accumulator;    
})

const clear = document.querySelector("#clear");
clear.addEventListener("click",()=>{
    displayValue.innerText = "";
  
    number1, number2, accumulator,currentValue,operator = undefined;
})

