
import { db } from "../drizzle/client"
import { subscriptions } from "../drizzle/schema/subscriptions"

interface SubscribeToEventParams{
  name: string
  email: string
  age: number
}
//metodo no redis
export async function subscribeToEvent({
  name,
  email,
  age
}: SubscribeToEventParams) {
  const result =
  await db.insert(subscriptions).values({
    name,
    email,
    age
  }).returning()

  const subscriber = result[0]

  return {
    subscriberId: subscriber.id
  }
}