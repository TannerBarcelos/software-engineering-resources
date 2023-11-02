/**
 * Compile the code using the command:
 * tsc --outDir dist using-ts.ts
 *
 * This will compile the code into a js file in the dist folder called using-ts.js
 */

const button = document.querySelector('button')! as HTMLButtonElement

function add(num1: number, num2: number) {
  return num1 + num2
}

button!.addEventListener('click', function () {
  const input1 = document.getElementById('num1') as HTMLInputElement
  const input2 = document.getElementById('num2') as HTMLInputElement
  const result = add(+input1.value, +input2.value)
  console.log(result)
})

/**
 * This code will avoid runtime errors.
 * Instead of concatenating the two values like in the js file, it properly adds the numbers
 * and protects us from passing string values / non-number values in as arguments to the add function
 *
 * THIS IS THE REASON WE USE TYPESCRIPT
 */
