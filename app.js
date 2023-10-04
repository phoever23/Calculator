// the operate function 
function add(a, b) {
    return Math.round((a + b) * 1000) /1000;
};
function subtract(a, b) {
    return Math.round((a - b) * 1000) /1000;
};
function multiply(a, b) {
    return Math.round(a * b * 1000) /1000;
};
function divide(a, b) {    
    if (b === 0) {return "ERROR"}
    else {return Math.round(a / b * 1000) /1000};    
};

function operate (number1, operator, number2) {
    return operator(number1,number2);
};

let operator, accumulator,currentValue;
let dotClicked = 0;
let displayValue = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const dot = document.querySelector("#dot");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");

numbers.forEach(number => {number.addEventListener("click",(e) => {
    let numberChoose = Number(e.target.innerText);
    if (!operator) { // user entering first number
        if (dotClicked === 0) {
            !accumulator ? accumulator = numberChoose : accumulator = accumulator * 10 + numberChoose;}
        else {
            typeof(accumulator) === "number" ? accumulator = accumulator + "." + numberChoose : accumulator += numberChoose;}
        displayValue.innerText = accumulator;        
        dotClicked = 0;
    } else {             
        if (dotClicked === 0) {!currentValue ? currentValue = numberChoose : currentValue = currentValue * 10 + numberChoose;}
        else {typeof(currentValue) === "number" ? currentValue = currentValue + "." + numberChoose : currentValue += numberChoose;}
        displayValue.innerText = currentValue;                
    } 
})    
});

dot.addEventListener("click", () => dotClicked ++);
    
operators.forEach(oper => {oper.addEventListener("click",(e) => {
    operator = e.target.value;
    currentValue = undefined;
})    
});

equal.addEventListener("click",()=>{
    if(accumulator === undefined) {displayValue.innerText = "ERROR";}
    else {
        accumulator = Number(accumulator);
        currentValue = Number(currentValue);
        accumulator = operate(accumulator,window[operator],currentValue);
        displayValue.innerText = accumulator;}          
})

const clear = document.querySelector("#clear");
clear.addEventListener("click",()=>{
    displayValue.innerText = "Enter number";  
    accumulator = undefined;
    currentValue = undefined;
    operator = undefined;
    dotClicked = 0;
})

