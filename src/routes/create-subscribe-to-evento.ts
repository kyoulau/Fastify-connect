import { ErrorMessages } from './../../node_modules/zod-to-json-schema/dist/types/errorMessages.d';
import fastify from 'fastify';
import { userSchema, UserSchemaType } from './schemas/userSchema';
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { request } from 'http';
import { z } from 'zod';
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
      // Validações adicionais (exemplo: verificar se o usuário já existe)
    // const existingUser = await findUserByEmail(user.email);
    // if (existingUser) {
    //   throw new Error('User already exists');
    // }

    // Retorna campos desejados
    const responseData = {
      name: user.name,
      email: user.email,
    };

    reply.status(201).send(responseData)

    } catch (error) {

      request.log.error(error);
      reply.status(500).send({
        message: 'Internal Server Error',
        error: error
      })
      
    }
    
    

    

    
  })
}