/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const userFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
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

function FormExample() {
  const form = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
  });

  // console.log(errors.email);

  // this function will run when the form is submitted and use Zod to validate the data as we set up useForm to resolve the schema
  const onSubmit: SubmitHandler<UserFormSchema> = (data) => {
    console.log("validated data with zod -> ", data);
    // const payload = userFormSchema.parse(data); // no reason for any of this either, as data is already validated from the useForm hook and the zodResolver
    // console.log(payload);
    alert(`Form submitted with data: ${JSON.stringify(data)}`);
    const simulatedPayloadForApiCall = JSON.stringify(data);
    console.log(simulatedPayloadForApiCall);
    // fetch("/api/form-submit-url", {
    //   method: "POST",
    //   body: simulatedPayloadForApiCall,
    // });
  };

  return (
    <Card className="lg:max-w-lg mt-4">
      <CardHeader>
        <CardTitle>Zod with Shadcn Form</CardTitle>
        <CardDescription>This is for learning Zod</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="jake" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the name your friends call you by.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="henson" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the last name you inherited from your family.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field, formState: { errors } }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="jakehenson@gmail.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the email address you check most often.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
export default FormExample;
