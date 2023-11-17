import {Operation, Calculator} from "./lib/definitions";

// Factory function to create calculator
// What is a factory function? https://www.youtube.com/watch?v=ImwrezYhw4w
export default function CalculatorFactory(operation: Operation): Calculator {
  // Return a function that takes a list of numbers and performs the operation
  return function (...values) {
    switch (operation) {
      case Operation.Add:
        return values.reduce((a, b) => a + b, 0);
      case Operation.Subtract:
        return values.reduce((a, b) => a - b, 0);
      case Operation.Multiply:
        return values.reduce((a, b) => a * b, 1);
      case Operation.Divide:
        return values.reduce((a, b) => a / b, 1);
      default:
        throw new Error(`Invalid operation: ${operation}`);
    }
  };
}
