
import { db } from "../drizzle/client"
import { subscriptions } from "../drizzle/schema/subscriptions"
import { redis } from "../redis/client"
//método no sql
interface AccessToInviteLinkParams{
  subscriberId: string
}

export async function accessInviteLink({
  subscriberId

}: AccessToInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId,1)

}