/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const userFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  hobbies: z
    .array(
      z.object({
        name: z.string(),
        years: z.number(),
        frequency: z
          .enum(["daily", "weekly", "monthly"])
          .optional()
          .default("daily"),
      })
    )
    .optional()
    .default([]),
});

type UserFormSchema = z.infer<typeof userFormSchema>;

// No reason for a handleSubmit function to run safeParse() on form because the resolver will handle that for us! So cool

function FormExample() {
  const form = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
  });
  console.log(Object.entries(form.getValues()));
  return <div>form-example</div>;
}
export default FormExample;
