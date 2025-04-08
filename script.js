let firstNum;
let secondNum;
let operator = ["+", "-", "=", "del", "C", "AC"];
let mainLine = document.getElementById("display");
let subLine = document.getElementById("subsection");

document.addEventListener("click", function (event) {
    console.log(mainLine.textContent);
    console.log(event.target.textContent);
    if (event.target.nodeName === "BUTTON") {
        if (!operator.includes(event.target.textContent)) {
            mainLine.textContent += event.target.textContent;
        } else if (event.target.textContent === "del") {
            mainLine.textContent = mainLine.textContent.slice(0, mainLine.textContent.length - 1);
        } else if (event.target.textContent === "C") {
            activeOperator = operator[4];
            mainLine.textContent = 0;
        } else if (event.target.textContent === "AC") {
            mainLine.textContent = "";
            subLine.textContent = "";
            firstNum = undefined;
            secondNum = undefined;
        } /*else {
        if (event.target.textContent === operator[0]){
            add();
        } else if (event.target.textContent === operator[1]){
            subtract();
        } else {
            result();
        }
    }*/
    }
});

document.getElementById("+").addEventListener("click", function () {
    firstNum = Number(mainLine.textContent);
    subLine.textContent = `${firstNum} +`;
    mainLine.textContent = "";
    activeOperator = operator[0];
    console.log("firstNum = " + firstNum);
    console.log("secondNum = " + secondNum);
});
document.getElementById("-").addEventListener("click", function () {
    firstNum = Number(mainLine.textContent);
    subLine.textContent = `${firstNum} -`;
    mainLine.textContent = "";
    activeOperator = operator[1];
    console.log("firstNum = " + firstNum);
    console.log("secondNum = " + secondNum);
});
document.getElementById("=").addEventListener("click", function () {
    if (secondNum == undefined) {
        secondNum = Number(mainLine.textContent);
    }
    else {
        firstNum = Number(mainLine.textContent)
    }
    console.log("firstNum = " + firstNum);
    console.log("secondNum = " + secondNum);
    if (activeOperator == operator[0]) {
        mainLine.textContent = add(firstNum, secondNum);
        subLine.textContent = `${firstNum} + ${secondNum} = `;
    } else {
        mainLine.textContent = subtract(firstNum - Number(mainLine.textContent));
        subLine.textContent = `${firstNum} - ${secondNum} = `;
        // firstNum = mainLine
        // secondNum = zustane to, cim bylo
    }
});
document.addEventListener("click", () =>
    console.log(typeof mainLine.textContent)
);

function add() {
    return firstNum + secondNum;
}

function subtract() {
    return firstNum - secondNum;
}
