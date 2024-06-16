import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'prod', 'test']).default('dev'),
  PORT: z.coerce.number().default(3000),
})

export const env = envSchema.parse(process.env)
