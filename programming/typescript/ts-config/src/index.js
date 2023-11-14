var Operation;
(function (Operation) {
    Operation["Add"] = "add";
    Operation["Subtract"] = "subtract";
    Operation["Multiply"] = "multiply";
    Operation["Divide"] = "divide";
})(Operation || (Operation = {}));
// Factory function to create calculator
// What is a factory function? https://www.youtube.com/watch?v=ImwrezYhw4w
function CalculatorFactory(operation) {
    return function (a, b) {
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
                throw new Error("Invalid operation: ".concat(operation));
        }
    };
}
var add = CalculatorFactory(Operation.Add);
console.log(add(2, 3)); // Output: 5
var subtract = CalculatorFactory(Operation.Subtract);
console.log(subtract(5, 3)); // Output: 2
var multiply = CalculatorFactory(Operation.Multiply);
console.log(multiply(2, 3)); // Output: 6
var divide = CalculatorFactory(Operation.Divide);
console.log(divide(6, 3)); // Output: 2
