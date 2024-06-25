import { FastifyInstance } from 'fastify'
import { register } from './controllers/registerTransaction'
import { get } from './controllers/getTransaction'

export async function appRoutes(app: FastifyInstance) {
  app.post('/register', register)
  app.get('/get', get)
}
