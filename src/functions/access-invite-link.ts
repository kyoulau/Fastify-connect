
import { redis } from "../redis/client"
//método no redis
interface AccessToInviteLinkParams{
  subscriberId: string
}

export async function accessInviteLink({
  subscriberId

}: AccessToInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId,1)

}