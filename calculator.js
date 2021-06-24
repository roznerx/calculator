const add = (n1, n2) => n1 + n2;
const substract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

const operate = (operator, n1, n2) => {
    if (operator = add || substract || multiply || divide) {
        return operator(n1, n2);
    }
};

