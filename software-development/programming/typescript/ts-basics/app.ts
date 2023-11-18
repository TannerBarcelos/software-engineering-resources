/**
 * Compile with the following command:
 * tsc -w app.ts --outDir dist
 */

// Core Types
// string, number, boolean

let userName: string = "Tanner";
let userAge: number = 27;
let userIsAdult: boolean = userAge > 18; // true

// Object Types
// object, Array, Tuple, Enum, Any

type User = {
  name: string;
  age: number;
  interests: string[];
};

// user is an object type which is of type User
const user: User = {
  name: userName,
  age: userAge,
  interests: ["Golf", "Coding", "Academia"],
};

// Enum - a way of giving more friendly names to sets of numeric values
enum Role {
  ADMIN, // 0
  READ_ONLY, // 1
  AUTHOR, // 2
}

enum Permission {
  READ = "READ",
  WRITE = "WRITE",
  DELETE = "DELETE",
}

// Why use enums? They are useful when you have a set of values that are closely related and need to be represented in a numeric way.

// Tuple - fixed length array with fixed types. Tuples are immutable (cannot be changed..even though TypeScript allows it)
type Perms = [Role, Permission]; // Perms can only be a tuple with two values, the first being a Role and the second being a Permission
const permissions: Perms = [Role.ADMIN, Permission.READ];

function printUser(user: User): void {
  console.log(
    `The users name is ${user.name} and their age is ${
      user.age
    } which means they ${user.age > 18 ? "are" : "are not"} an adult.`,
  );
  if (user.interests?.length) {
    for (const interest of user.interests) {
      console.log(`${user.name} is interested in ${interest}`);
    }
  } else {
    console.log(`${user.name} has no interests.`);
  }
}

printUser(user);

// console.log(Object.entries(user)) // [['name', 'Tanner'], ['age', 27], ['interests', ['Golf', 'Coding', 'Academia']]]

// Any - any type. Use sparingly. Allows for dynamic types.
let favoriteThing: any = "Golf";
favoriteThing = 27;
favoriteThing = true;
favoriteThing = ["Golf", "Coding", "Academia"];
favoriteThing = {
  name: "Tanner",
  age: 27,
  interests: ["Golf", "Coding", "Academia"],
};

// Union Types - allow for multiple types to be used for a variable
type Combinable = string | number; // this is known as a type alias (a way to give a name to a type) and is aliasing the union type of string and number to Combinable
function combine(n: Combinable, m: Combinable): Combinable {
  // Runtime type check to see if n or m is a string or number. Union types are useful for runtime type checks.
  if (typeof n === "string" || typeof m === "string") {
    // || covers or && covers and as known from discrete math
    return n.toString() + m.toString();
  }
  return n + m;
}

console.log(combine("Tanner", "Barcelos"));
console.log(combine(10, 20));
console.log(combine("Tanner", 10));

// Literal Types - allows for a specific value to be used for a variable
type YesNo = "yes" | "no";
let answer: YesNo = "yes";
// answer = 'no' // error
// answer = 'maybe' // error

// Type Aliases - allows for a type to be given a name
type NumOrString = number | string;
type UserWithInterests = User & {interests: string[]}; // intersection type (a type that combines multiple types)

const userWithInterests: UserWithInterests = {
  name: "Hayden",
  age: 26,
  interests: [],
};

// Function Return Types and Void
function add(n: number, m: number): number {
  return n + m;
}

function printResult(n: number): void {
  console.log(`Result: ${n}`);
}

printResult(add(10, 20));

// Function Types
let combineValues: (a: number, b: number) => number; // function type with two parameters of type number and a return type of number
combineValues = add;
// combineValues = printResult // error
// combineValues = 5 // error
console.log(combineValues(10, 20));

// Function Types and Callbacks
type Callback = (n: number) => void;
function addAndHandle(n: number, m: number, cb: Callback): void {
  const result = n + m;
  if (result > 100) {
    cb(result + 2);
  } else {
    cb(result);
  }
}

addAndHandle(10, 500, (result) => {
  console.log(result * 2);
});

// Unknown Type

let userInput: unknown;
let userName2: string;

userInput = 5;
userInput = "Tanner";
// userName2 = userInput // error
if (typeof userInput === "string") {
  userName2 = userInput;
}

// Never Type - a type that is never reached
function generateError(message: string, code: number): never {
  throw new Error(`${message} with code ${code}`);
}

try {
  generateError("An error occurred", 500);
} catch (error) {
  console.error(error.message);
  console.error(error);
}
