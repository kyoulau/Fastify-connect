import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core";


export const subscriptions = pgTable('subscription',{
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  age: integer('age'),
  createdAt: timestamp('created_at').notNull().defaultNow()
})