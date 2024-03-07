import { z } from "zod";

const envSchema = z.object({
    NEXT_PUBLIC_API_URL: z.string(),
    NEXT_PUBLIC_API_TOKEN: z.string(),
});
export const ENV = envSchema.parse({
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
});
