import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod'
import { getSubscriberInviteClicks } from '../functions/get-subscriber-invite-clicks';
import { count } from 'console';
import { request } from 'http';

export const getSubscriberInviteClicksRoute: FastifyPluginAsyncZod = async app =>{
  app.get(
    '/subscribers/:subscriberId/ranking/clicks',
    {
      schema:{
        summary:'Get subscriber invite clicks count',
        
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

      //codigo 200 nao precisa de reply.send pois ja é padrão
      const { subscriberId } = request.params

      const { count } = await getSubscriberInviteClicks({subscriberId})

      return { count }
    }
  )
}