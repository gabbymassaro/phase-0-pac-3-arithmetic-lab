function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b; 
}

function multiply(a, b) {
    return a * b; 
}

function divide(a, b) {
    return a / b; 
}

function increment(a) {
    return ++a; 
}

function decrement(a) {
    return --a; 
}

function makeInt(n) {

    if (parseInt(n)){
        return parseInt(n, 10);
    }
}


function preserveDecimal(n) {
    return parseFloat(n);
}
preserveDecimal("n");