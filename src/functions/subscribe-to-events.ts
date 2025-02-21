
import { db } from "../drizzle/client"
import { eq } from 'drizzle-orm'
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
  
  const subscribers = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email))
  
    if(subscribers.length > 0){
      return {
        subscriberId: subscribers[0].id
      }
    }
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