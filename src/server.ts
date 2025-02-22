import * as dotenv from 'dotenv';
dotenv.config(); 

import {fastify} from "fastify";
import { fastifyCors } from "@fastify/cors";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { fastifySwagger } from '@fastify/swagger'
import { createSubscribeToEventRoute } from './routes/create-subscribe-to-evento';
import fastifySwaggerUi from "@fastify/swagger-ui";
import { env } from "../env";
import { accessInviteLinkRoute } from './routes/access-invite-link-route';
import { getSubscriberInviteClicksRoute } from './routes/get-access-invite-link-route'; 
import { getSubscriberInviteCountRoute } from './routes/get-subscriber-invites-count-route';
import { getSubscriberRankingPositionRoute } from './routes/get-subscriber-ranking-position-route';
import { getRankingRoute } from './routes/get-ranking-route';


const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
  origin: 'http://localhost:3030'
})


app.get('/hi', ()=>{
  return "Laura says HII"
})

app.register(fastifySwagger,{
  openapi: {
    info: {
      title: "FIRST API FATIFY",
      version: "0.0.1"
    },
  },
  transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(createSubscribeToEventRoute)

app.register(accessInviteLinkRoute)

app.register(getSubscriberInviteClicksRoute)

app.register(getSubscriberInviteCountRoute)

app.register(getSubscriberRankingPositionRoute)

app.register(getRankingRoute)

app.listen({port: env.PORT}).then(() => {
  console.log('HTTP server runing!')
})

