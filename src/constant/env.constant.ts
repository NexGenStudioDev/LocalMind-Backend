import dotenv from "dotenv";
dotenv.config();

import { EnvSchema } from "../config/env";

export const env = EnvSchema.parse(process.env);
