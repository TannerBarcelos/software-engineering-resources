import CalculatorFactory from "./calculator";
import {Operation} from "./lib/definitions";

const add = CalculatorFactory(Operation.Add);
console.log(add(2, 3)); // Output: 5

const subtract = CalculatorFactory(Operation.Subtract);
console.log(subtract(5, 3)); // Output: 2

const multiply = CalculatorFactory(Operation.Multiply);
console.log(multiply(2, 3)); // Output: 6

const divide = CalculatorFactory(Operation.Divide);
console.log(divide(6, 3)); // Output: 2
