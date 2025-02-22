import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from 'zod'
import { getSubscriberInviteCountClicks } from "../functions/get-subscriber-invites-count";


export const getSubscriberInviteCountRoute : FastifyPluginAsyncZod = async app => {
  app.get(
    '/subscribers/:subscriberId/ranking/count',
    {
      schema:{
        summary:'Get subscribers invites count links',
        tags:['referral'],
        params: z.object({
          subscriberId: z.string(),
        }),
        response:{
          202: z.object({
            count: z.number(),
          }),
        },
      },
    },
    async (request) =>{
      const {subscriberId} = request.params
      console.log(subscriberId)

      const { count } = await getSubscriberInviteCountClicks({ subscriberId })

      return {count}

    }
  )
}