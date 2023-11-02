var button = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    var input1 = document.getElementById('num1');
    var input2 = document.getElementById('num2');
    var result = add(+input1.value, +input2.value);
    console.log(result);
});
/**
 * This code will avoid runtime errors.
 * Instead of concatenating the two values like in the js file, it properly adds the numbers
 * and protects us from passing string values / non-number values in as arguments to the add function
 *
 * THIS IS THE REASON WE USE TYPESCRIPT
 */
