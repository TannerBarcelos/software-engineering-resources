import "./App.css";
import { z } from "zod";
import FormExample from "./form-example";

// Zod is a TypeScript-first schema declaration and validation library. It is designed to be as simple as possible, and to be as easy to use as possible.
// We define a schema using the z object, and then we can use the parse method to validate the object against the schema.
// A schema is just a fancy way of saying a set of rules that an object must follow in order to be considered valid.
// A schema can also be used to generate a type for the object that it describes so we can type check our objects against the schema in the code for build time type checking.
const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  hobbies: z.array(
    z.object({
      name: z.string(),
      years: z.number(),
      frequency: z.enum(["daily", "weekly", "monthly"]).optional(),
    })
  ),
});

// The infer keyword is used to get the type of a schema. This is useful when we want to use the schema to generate a type for an object
// And get type static type checking and safety in our code.
type User = z.infer<typeof userSchema>;

// const user = {
//   firstName: 1, // should be a string - Zod will validate this and throw an error (or success: false if using .safeParse)
//   lastName: "Barcelos",
// };

const user2: User = {
  firstName: "Tanner",
  lastName: "Barcelos",
  email: "test@gmail.com",
  hobbies: [
    {
      name: "Programming",
      years: 5,
      frequency: "daily",
    },
  ],
};

// console.log(userSchema.parse(user)); // throws an error
// console.log(userSchema.safeParse(user)); // { success: false, error: ZodError }
console.log(userSchema.safeParse(user2)); // { success: true, data: { firstName: 'Tanner', lastName: 'Barcelos' } }

function App() {
  return (
    <div>
      <h1>Learning Zod</h1>
      <FormExample />
    </div>
  );
}

export default App;
