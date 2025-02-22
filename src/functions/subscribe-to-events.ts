
import { db } from "../drizzle/client"
import { eq } from 'drizzle-orm'
import { subscriptions } from "../drizzle/schema/subscriptions"
import { redis } from "../redis/client"

interface SubscribeToEventParams{
  name: string
  email: string
  age: number
  referrerId?: string | null
}
//metodo no redis
export async function subscribeToEvent({
  name,
  email,
  age,
  referrerId
}: SubscribeToEventParams) {

  //consulta antes para saber se os email são iguais
  
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
    age,
  }).returning()


  if (referrerId){
    await redis.zincrby('referral:ranking', 1, referrerId)
  }

  const subscriber = result[0]

  return {
    subscriberId: subscriber.id
  }
}