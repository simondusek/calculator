import { Calculate } from "./functions.js";

let expression1;
let expression2;
let activeOperator;

const methods = {
  "+": Calculate.addition,
  "-": Calculate.subtraction,
  "*": Calculate.multiplication,
  "/": Calculate.division,
  "^": Calculate.power,
  "&": Calculate.root,
}
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const dot = ".";
const operators = Object.keys(methods);
const equal = ["=", "Enter"];
const line = document.getElementById("line");
const log = document.getElementById("log");
let middleLine = "";

export function input(text){
if (numbers.includes(text)) {
    if (expression2 == undefined) {
        middleLine += text;
        line.textContent = Number(middleLine);
    } else {
      expression1 = undefined;
      expression2 = undefined;
      activeOperator = undefined;
      line.textContent = "";
      log.textContent = "";
      middleLine += text;
      line.textContent = Number(middleLine);
    }
  }
  if (text === dot && (!middleLine.includes(dot) || middleLine.charAt(middleLine.length-1) === dot)) {
    if (middleLine.charAt(middleLine.length-1) !== dot)
        middleLine += text;
    line.textContent = middleLine;
  }
  if (text === "DEL" || text === "Backspace") {
    if (expression1 === undefined || expression2 === undefined){
        middleLine = middleLine.slice(0, middleLine.length - 1);
        line.textContent = Number(middleLine)
    };
  } else {
    // do nothing
  };

  if (text === "C" || text === "c") {
    expression1 = undefined;
    expression2 = undefined;
    activeOperator = undefined;
    middleLine = "";
    log.textContent = "";
    line.textContent = "";
  };

  if (operators.includes(text)) {
    if (activeOperator == undefined) {
      activeOperator = text;
      expression1 = Number(line.textContent);
      middleLine = "";
      line.textContent = 0;
      log.textContent = `${expression1} ${activeOperator}`;
    } else {
      if (expression2 == undefined) {
        expression2 = Number(line.textContent);
      } else {
        expression1 = methods[activeOperator](expression1, expression2);
      }
      activeOperator = text;
      expression2 = undefined; // Reset expression2 for the next input
      middleLine = "";
      line.textContent = 0;
      log.textContent = `${expression1} ${activeOperator}`;
    }
  }

  if (equal.includes(text)) {
    if (
      expression1 == undefined &&
      expression2 == undefined &&
      activeOperator == undefined
    ) {
      // do nothing
    } else {
      if (expression2 == undefined) {
        expression2 = Number(middleLine);
      } else {
        expression1 = methods[activeOperator](
          expression1,
          expression2
        );
      }
      middleLine = String(methods[activeOperator](
        expression1,
        expression2
      ));
      line.textContent = Number(middleLine);
      log.textContent = `${expression1} ${activeOperator} ${expression2} ${equal[0]}`;
    }
  }};
