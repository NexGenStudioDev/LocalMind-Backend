import { z } from "zod";

export const userRegisterSchema = z.object({
  name: z.string().trim().min(1, "Name is required!"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8).max(20),
});
