import { env } from './env';
import type { Config } from 'drizzle-kit'



export default {
  schema: './src/drizzle/schema/*',
  out: './src/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
} satisfies Config