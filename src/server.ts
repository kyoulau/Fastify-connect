import * as dotenv from 'dotenv';
dotenv.config(); 

import {fastify} from "fastify";
import { fastifyCors } from "@fastify/cors";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { fastifySwagger } from '@fastify/swagger'
import { createSubscribeToEvent } from './routes/create-subscribe-to-evento';
import fastifySwaggerUi from "@fastify/swagger-ui";
import { env } from "../env";
import { accessInviteLinkRoute } from './routes/access-invite-link';



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

app.register(createSubscribeToEvent)

app.register(accessInviteLinkRoute)

app.listen({port: env.PORT}).then(() => {
  console.log('HTTP server runing!')
})

