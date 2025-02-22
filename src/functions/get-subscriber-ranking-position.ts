import { redis } from '../redis/client'


interface GetSubscriberRanckingPositionParams {
  subscriberId: string
}

export async function getSubscriberRankingPosition({
  subscriberId
}:GetSubscriberRanckingPositionParams) {
  //determina a posicao num sortedSrt
const rank  = await redis.zrevrank('referral:ranking', subscriberId)

if (rank== null){
  return{position : null}
} 

return{ position: rank + 1 }


}