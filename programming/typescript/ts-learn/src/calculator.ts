import {Operation, Calculator} from "./lib/definitions";

// Factory function to create calculator
// What is a factory function? https://www.youtube.com/watch?v=ImwrezYhw4w
export default function CalculatorFactory(operation: Operation): Calculator {
  return function (a: number, b: number) {
    switch (operation) {
      case Operation.Add:
        return a + b;
      case Operation.Subtract:
        return a - b;
      case Operation.Multiply:
        return a * b;
      case Operation.Divide:
        return a / b;
      default:
        throw new Error(`Invalid operation: ${operation}`);
    }
  };
}
