let n1 = "";
let n2 = "";
let operator = "";

let enabler = "OFF";

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
display.value = "0";

//numbers

const sevenBtn = document.querySelector("#seven");
sevenBtn.addEventListener("click", () => {
    if (display.value === "0" || display.value == "ERROR!" || enabler == "ON") {
        display.value = "7";
        enabler = "OFF";
    } else {
        display.value += "7";
    }
});

const eightBtn = document.querySelector("#eight");
eightBtn.addEventListener("click", () => {
    if (display.value === "0" || display.value == "ERROR!" || enabler == "ON") {
        display.value = "8"; 
        enabler = "OFF"; 
    } else {
        display.value += "8";
    }
});

const nineBtn = document.querySelector("#nine");
nineBtn.addEventListener("click", () => {
    if (display.value === "0" || display.value == "ERROR!" || enabler == "ON") {
        display.value = "9";  
        enabler = "OFF";
    } else {
        display.value += "9";
    }
});

const fourBtn = document.querySelector("#four");
fourBtn.addEventListener("click", () => {
    if (display.value === "0" || display.value == "ERROR!" || enabler == "ON") {
        display.value = "4";  
        enabler = "OFF";
    } else {
        display.value += "4";
    }
});

const fiveBtn = document.querySelector("#five");
fiveBtn.addEventListener("click", () => {
    if (display.value === "0" || display.value == "ERROR!" || enabler == "ON") {
        display.value = "5";  
        enabler = "OFF";
    } else {
        display.value += "5";
    }
});

const sixBtn = document.querySelector("#six");
sixBtn.addEventListener("click", () => {
    if (display.value === "0" || display.value == "ERROR!" || enabler == "ON") {
        display.value = "6";  
        enabler = "OFF";
    } else {
        display.value += "6";
    }
});

const threeBtn = document.querySelector("#three");
threeBtn.addEventListener("click", () => {
    if (display.value === "0" || display.value == "ERROR!" || enabler == "ON") {
        display.value = "3"; 
        enabler = "OFF"; 
    } else {
        display.value += "3";
    }
});

const twoBtn = document.querySelector("#two");
twoBtn.addEventListener("click", () => {
    if (display.value === "0" || display.value == "ERROR!" || enabler == "ON") {
        display.value = "2";  
        enabler = "OFF";
    } else {
        display.value += "2";
    }
});

const oneBtn = document.querySelector("#one");
oneBtn.addEventListener("click", () => {
    if (display.value === "0" || display.value == "ERROR!" || enabler == "ON") {
        display.value = "1";  
        enabler = "OFF";
    } else {
        display.value += "1";
    }
});

const zeroBtn = document.querySelector("#zero");
zeroBtn.addEventListener("click", () => {
    if (display.value === "0" || display.value == "ERROR!" || enabler == "ON") {
        display.value = "0";
        enabler = "OFF";
    } else {
        display.value += "0";
    }
});

//operations

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {

    if (typeof operator == "function") {
        if (operator === divide && n2 === "0") {
            display.value = "ERROR!";
            operator = "";
        } else {
            n2 = parseFloat(display.value);
            display.value = Math.round((operate(operator, n1, n2)) * 100 + Number.EPSILON) / 100;
            n1 = parseFloat(display.value);
            operator = add;
            enabler = "ON";
        }
    } else {
        n1 = parseFloat(display.value);
        display.value = "0";   
        operator = add;
        n2 = display.value;
    }
});

const substractBtn = document.querySelector("#substract");
substractBtn.addEventListener("click", () => {
    if (typeof operator == "function") {
        if (operator === divide && n2 === "0") {
            display.value = "ERROR!";
            operator = "";
        } else {
            n2 = parseFloat(display.value);
            display.value = Math.round((operate(operator, n1, n2)) * 100 + Number.EPSILON) / 100;
            n1 = parseFloat(display.value);
            operator = substract;
            enabler = "ON";  
        }
    } else {
        n1 = parseFloat(display.value);
        display.value = "0";   
        operator = substract;
        n2 = display.value;
    }
});

const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", () => {
    if (typeof operator == "function") {
        if (operator === divide && n2 === "0") {
            display.value = "ERROR!";
            operator = "";
        } else {
            n2 = parseFloat(display.value);
            display.value = Math.round((operate(operator, n1, n2)) * 100 + Number.EPSILON) / 100;
            n1 = parseFloat(display.value);
            operator = multiply;     
            enabler = "ON";   
        }
    } else {
        n1 = parseFloat(display.value);
        display.value = "0";   
        operator = multiply;
        n2 = display.value;
    }
});

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", () => {
    if (typeof operator == "function") {
        if (operator === divide && n2 === "0") {
            display.value = "ERROR!";
            operator = "";
        } else {
            n2 = parseFloat(display.value);
            display.value = Math.round((operate(operator, n1, n2)) * 100 + Number.EPSILON) / 100;
            n1 = parseFloat(display.value);
            operator = divide;    
            enabler = "ON";   
        } 
    } else {
        n1 = parseFloat(display.value);
        display.value = "0";   
        operator = divide;
        n2 = display.value;
    }
});

//equal

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", () => {   
        n2 = parseFloat(display.value);
        if (operator === divide && n2 === 0) {
            display.value = "ERROR!";
            operator = "";
        } else {
            display.value = Math.round((operate(operator, n1, n2)) * 100 + Number.EPSILON) / 100;
            n1 = display.value;
            operator = "";
        }
});

//point

const pointBtn = document.querySelector("#point");
pointBtn.addEventListener("click", () => {
    display.value += ".";
});

//clear and delete

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    display.value = "0";
    n1 = "";
    n2 = "";
    operator = "";
});

const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", () => {
    displayValue = display.value;
    newDisplayValue = displayValue.substr(0, displayValue.length -1);
    display.value = newDisplayValue;
    displayValue = display.value;
});

