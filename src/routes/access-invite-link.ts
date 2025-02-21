import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from 'zod'
import { subscribeToEvent  } from "../functions/subscribe-to-events";
import { env } from "../../env";
import { accessInviteLink } from "../functions/access-invite-link";
import { redis } from "../redis/client"


export const accessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/invites/:subscriberId',
    {
      schema:{
        summary:'Access invite link redirect user',
        tags:['referral'],
        params: z.object({
          subscriberId: z.string(),
        }),
        response:{
          302: z.null(),
        },
      },
    },
    async (request, reply) =>{
      const {subscriberId} = request.params

      console.log(subscriberId)

      await accessInviteLink({subscriberId})

      console.log( await redis.hgetall('referral:access-count'))

      const redirectUrl = new URL(env.WEB_URL)

      redirectUrl.searchParams.set('referral', subscriberId)

      return reply.redirect(redirectUrl.toString(),302)
    }
  )
}