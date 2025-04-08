let expression1;
let expression2;
let activeOperator;
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const operators = ["+", "-", "*", "/", "D", "C", "W"];
const equal = ["=", "Enter"];
const line = document.getElementById("line");
const log = document.getElementById("log");

document.addEventListener("keydown", function (event) {
    console.log(
        `expression1 = ${expression1}, expression2 = ${expression2}, activeOperator = ${activeOperator}`
    );
    if (numbers.includes(event.key)) {
        if (expression2 == undefined) {
            line.textContent += event.key;
        } else {
            expression1 = undefined;
            expression2 = undefined;
            activeOperator = undefined;
            line.textContent = "";
            log.textContent = "";
            line.textContent += event.key;
        }
    }
    if (event.key === "Backspace") {
        line.textContent = line.textContent.slice(0, line.textContent.length - 1);
    }

    if (operators.includes(event.key)) {
        if (activeOperator == undefined) {
            activeOperator = event.key;
            expression1 = Number(line.textContent);
            line.textContent = "";
            log.textContent = `${expression1} ${activeOperator}`;
        } else {
            if (expression2 == undefined) {
                expression2 = Number(line.textContent);
            } else {
                expression1 = getResult(expression1, expression2, activeOperator);
            }
            activeOperator = event.key;
            expression2 = undefined; // Reset expression2 for the next input
            line.textContent = "";
            log.textContent = `${expression1} ${activeOperator}`;
        }
    }

    if (equal.includes(event.key)) {
        if (
            expression1 == undefined &&
            expression2 == undefined &&
            activeOperator == undefined
        ) {
            // do nothing
        } else {
            if (expression2 == undefined) {
                expression2 = Number(line.textContent);
            } else {
                if (getResult(expression1, expression2, activeOperator) == Infinity) {
                    line.textContent = "Deleni nulou!"
                } else {
                    expression1 = getResult(expression1, expression2, activeOperator);
                }
            }

            console.log(getResult(expression1, expression2, activeOperator));
            line.textContent = getResult(expression1, expression2, activeOperator);
            log.textContent = `${expression1} ${activeOperator} ${expression2} ${equal[0]}`;
        }
    }
});

function getResult(exp1, exp2, operator) {
    if (operator == "+") {
        return add(exp1, exp2);
    } else if (operator == "-") {
        return sub(exp1, exp2);
    } else if (operator == "*") {
        return multiply(exp1, exp2);
    } else if (operator == "/") {
        return divide(exp1, exp2);
    }
}

function add(exp1, exp2) {
    return exp1 + exp2;
}

function sub(exp1, exp2) {
    return exp1 - exp2;
}

function multiply(exp1, exp2) {
    return exp1 * exp2;
}

function divide(exp1, exp2) {
    return exp1 / exp2;

}