/**
 * Compile with the following command:
 * tsc -w app.ts --outDir dist
 */

// Core Types
// string, number, boolean

let userName: string = 'Tanner'
let userAge: number = 27
let userIsAdult: boolean = userAge > 18 // true

// Object Types
// object, Array, Tuple, Enum, Any

type User = {
  name: string
  age: number
  interests: string[]
}

// user is an object type which is of type User
const user: User = {
  name: userName,
  age: userAge,
  interests: ['Golf', 'Coding', 'Academia'],
}

// Enum - a way of giving more friendly names to sets of numeric values
enum Role {
  ADMIN, // 0
  READ_ONLY, // 1
  AUTHOR, // 2
}

enum Permission {
  READ = 'READ',
  WRITE = 'WRITE',
  DELETE = 'DELETE',
}

// Why use enums? They are useful when you have a set of values that are closely related and need to be represented in a numeric way.

// Tuple - fixed length array with fixed types. Tuples are immutable (cannot be changed..even though TypeScript allows it)
type Perms = [Role, Permission] // Perms can only be a tuple with two values, the first being a Role and the second being a Permission
const permissions: Perms = [Role.ADMIN, Permission.READ]

function printUser(user: User) {
  console.log(
    `The users name is ${user.name} and their age is ${
      user.age
    } which means they ${user.age > 18 ? 'are' : 'are not'} an adult.`,
  )
  if (user.interests?.length) {
    for (const interest of user.interests) {
      console.log(`${user.name} is interested in ${interest}`)
    }
  } else {
    console.log(`${user.name} has no interests.`)
  }
}

printUser(user)

// console.log(Object.entries(user)) // [['name', 'Tanner'], ['age', 27], ['interests', ['Golf', 'Coding', 'Academia']]]
