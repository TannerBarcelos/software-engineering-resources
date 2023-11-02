// Core Types
// string, number, boolean

let userName: string = 'Tanner'
let userAge: number = 28
let userIsAdult: boolean = userAge > 18

function isAdult(age: number) {
  return age > 18
}

function printUser(name: string, age: number) {
  const adult = isAdult(age)
  console.log(
    `The users name is ${name} and their age is ${age} which means they ${
      adult ? 'are' : 'are not'
    } an adult.`,
  )
}

printUser(userName, userAge)
