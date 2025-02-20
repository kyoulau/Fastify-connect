import { subscribeToEvent } from '../functions/subscribe-to-events';
import { userSchema, UserSchemaType } from './schemas/userSchema';
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { userResponseSchema } from './schemas/userSchemaResponse';

export const createSubscribeToEvent: FastifyPluginAsyncZod = async (app) =>{
  app.post<{Body: UserSchemaType}>('/subscriptions',{
    //Define o esquema de validação para o corpo da requisição (body) e a resposta (response).
    schema: {
      body: userSchema,
      response:{
        201: userResponseSchema
      },
    },
    
  }, async (request,reply) => {
    try {
      const user = request.body;

      const { subscriberId } = await subscribeToEvent({
        name: user.name,
        email:user.email,
        age:user.age
      })
      
    const responseData = {
      name: user.name,
      email: user.email,
      subscriberId: subscriberId
    };

    reply.status(201).send(responseData)

    } catch (error) {

      request.log.error(error);

      if (error instanceof Error) { 
        reply.status(500).send({
          message: 'Internal Server Error',
          error: error.message, // Envia apenas a mensagem do erro
        });
      } else { // Outros tipos de erro
        reply.status(500).send({
          message: 'Internal Server Error',
          error: 'An unexpected error occurred.', // Mensagem genérica
        });}
    }
  })

}