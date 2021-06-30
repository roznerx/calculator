const add = (n1, n2) => n1 + n2;
const substract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

const operate = (operator, n1, n2) => {
    if (operator == add || substract || multiply || divide) {
        return operator(n1, n2);
    }
};

//display

const display = document.getElementById("display");
let displayValue = display.value;

displayValue = 0;

//numbers

const sevenBtn = document.querySelector("#seven");
sevenBtn.addEventListener("click", () => {
    display.value += 7;
});

const eightBtn = document.querySelector("#eight");
eightBtn.addEventListener("click", () => {
    display.value += 8;
});

const nineBtn = document.querySelector("#nine");
nineBtn.addEventListener("click", () => {
    display.value += 9;
});

const fourBtn = document.querySelector("#four");
fourBtn.addEventListener("click", () => {
    display.value += 4;
});

const fiveBtn = document.querySelector("#five");
fiveBtn.addEventListener("click", () => {
    display.value += 5;
});

const sixBtn = document.querySelector("#six");
sixBtn.addEventListener("click", () => {
    display.value += 6;
});

const threeBtn = document.querySelector("#three");
threeBtn.addEventListener("click", () => {
    display.value += 3;
});

const twoBtn = document.querySelector("#two");
twoBtn.addEventListener("click", () => {
    display.value += 2;
});

const oneBtn = document.querySelector("#one");
oneBtn.addEventListener("click", () => {
    display.value += 1;
});

const zeroBtn = document.querySelector("#zero");
zeroBtn.addEventListener("click", () => {
    display.value += 0;
});

//operations

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {
    n1 = parseFloat(display.value);
    display.value = 0;   
    operator = add;
});

const substractBtn = document.querySelector("#substract");
substractBtn.addEventListener("click", () => {
    n1 = parseFloat(display.value);
    display.value = 0;   
    operator = substract;
});

const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", () => {
    n1 = parseFloat(display.value);
    display.value = 0;   
    operator = multiply;
});

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", () => {
    n1 = parseFloat(display.value);
    display.value = 0;   
    operator = divide;
});

//equal

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", () => {
    n2 = parseFloat(display.value);
    display.value = operate(operator, n1, n2);
    displayValue = n1;
});

//point

const pointBtn = document.querySelector("#point");

//clear and delete

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    display.value = 0;
});

const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", () => {
    displayValue = display.value;
    newDisplayValue = displayValue.substr(0, displayValue.length -1);
    display.value = newDisplayValue;
    DisplayValue = display.value;
});
