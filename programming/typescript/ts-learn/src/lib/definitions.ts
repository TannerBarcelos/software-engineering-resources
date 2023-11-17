enum Operation {
  Add = "add",
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide",
}

type Calculator = (..._: Array<number>) => number;

export {Operation, Calculator};
