import { redis } from '../redis/client'


interface GetSubscriberInviteClicksCountParams {
  subscriberId: string
}

export async function getSubscriberInviteCountClicks({
  subscriberId
}:GetSubscriberInviteClicksCountParams) {
const count = await redis.zscore('referral:ranking', subscriberId)

return{ count: count ? Number.parseInt(count) : 0 }

}