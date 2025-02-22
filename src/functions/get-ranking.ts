import { db } from './../drizzle/client';
import { redis } from '../redis/client'
import { subscriptions } from '../drizzle/schema/subscriptions';
import { inArray } from 'drizzle-orm';

export async function getUserRanking() {
  const ranking = await redis.zrevrange('referral: ranking',0,2, 'WITHSCORES')
  const subscriberIdAndScore: Record<string, number> = {}

  console.log(ranking)

  // for (let i = 0; i < ranking.length; i+= 2){
  //   subscriberIdAndScore[ranking[1]] = Number.parseInt(ranking[i+2])
  // }

  //console.log(Object.keys(subscriberIdAndScore))

  // const subscribers = await db
  // .select()
  // .from(subscriptions)
  // .where(inArray(subscriptions.id, Object.keys(subscriberIdAndScore)))

  // const rankingWithScore = subscribers.map(subscriber =>{
  //   console.log(subscriber)
  //   return{
  //     id: subscriber.id,
  //     name: subscriber.name,
  //     age: subscriber.age,
  //     score: subscriberIdAndScore[subscriber.id]
  //   }
  // })
  // .sort((sub1,sub2)=>{
  //   return sub2.score - sub1.score
  // })

  // console.log("estou bem aqui eu entre")

  // return {rankingWithScore}
}