import { z } from "zod"

export const registerSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters" }),
	email: z.string().email(),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters" })
		.max(20, { message: "Password must not exceed 20 characters" })
})

export type RegisterSchema = z.infer<typeof registerSchema>
