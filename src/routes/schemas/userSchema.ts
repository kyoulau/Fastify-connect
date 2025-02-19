import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }),
});

export type UserSchemaType = z.infer<typeof userSchema>;