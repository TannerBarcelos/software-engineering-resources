import CalculatorFactory from "./calculator";
import {Operation} from "./lib/definitions";

const add = CalculatorFactory(Operation.Add);
const subtract = CalculatorFactory(Operation.Subtract);
const multiply = CalculatorFactory(Operation.Multiply);
const divide = CalculatorFactory(Operation.Divide);

const listResults: Array<number> = [
  add(2, 3, 50, 100),
  subtract(5, 3),
  multiply(2, 3, -1),
  divide(6, 3),
];

const copyOfListResults = [...listResults]; // demonstrate spread operator

console.log(copyOfListResults);
