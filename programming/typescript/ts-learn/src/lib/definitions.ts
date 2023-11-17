enum Operation {
  Add = "add",
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide",
}

type Calculator = (a: number, b: number) => number;

export {Operation, Calculator};
