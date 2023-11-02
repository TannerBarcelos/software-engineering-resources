const button = document.querySelector( 'button' )
const input1 = document.getElementById( 'num1' )
const input2 = document.getElementById( 'num2' )

function add( num1, num2 ) {
    return num1 + num2
}

button.addEventListener( 'click', function () {
    // We cannot see the bug here, but it is there as we are concatenating strings instead of adding numbers
    // like we wanted. These type of bugs are very hard to find and fix and can be avoided by using TypeScript. (See using-ts.ts)
    const result = add( input1.value, input2.value )
    console.log( result )
} )
