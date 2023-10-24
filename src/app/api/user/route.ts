import { NextResponse } from "next/server";
import { hash } from 'bcrypt'
import { z } from "zod";

// Define a schema for input validation
const userSchema = z
  .object({
    username: z.string()
      .min(1, 'Username is required')
      .max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
  })
