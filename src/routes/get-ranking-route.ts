import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from 'zod'
import { subscribeToEvent  } from "../functions/subscribe-to-events";
import { env } from "../../env";
import { accessInviteLink } from "../functions/access-invite-link";
import { redis } from "../redis/client"
import { getUserRanking } from "../functions/get-ranking";
import { request } from "http";


export const getRankingRoute : FastifyPluginAsyncZod = async app => {
  app.get(
    '/ranking',
    {
      schema:{
        summary:'Get ranking',
        tags:['referral'],
        // response:{ 200:
        //     z.object({
        //       ranking: z.array(
        //         z.object({
        //           id:z.string(),
        //           name:z.string(),
        //           score:z.number(),
        //         })
        //       )
        //   }),
        // },
      },
    },
    async request  =>{

      //const { rankingWithScore } = 


      return 'ok'

      //return { ranking: rankingWithScore}
    }
  )
}