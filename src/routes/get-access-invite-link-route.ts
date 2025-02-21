import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod'
import { getSubscriberInviteClicks } from '../functions/get-subscriber-invites-clicks';
import { count } from 'console';
import { request } from 'http';

export const getSubscriberInviteClicksRoute: FastifyPluginAsyncZod = async app =>{
  app.get(
    '/subscribers/:subscriberId/ranking/clicks',
    {
      schema:{
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          200: z.object({
            count: z.number(),
          }),
        },
      },
    },
    async request =>{
      const { subscriberId } = request.params

      const { count } = await getSubscriberInviteClicks({subscriberId})

      return { count }
    }
  )
}