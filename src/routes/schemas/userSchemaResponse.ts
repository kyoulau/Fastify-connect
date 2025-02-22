import { userSchema} from "./userSchema";
import {z} from 'zod';

export const userResponseSchema = userSchema.pick({
  name: true,
  email: true,

});

export type UserResponseType = z.infer<typeof userResponseSchema>;