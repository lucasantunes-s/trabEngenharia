import { RedisRecomendationsRepository } from '@/repositories/redis/redis-recomendation-repository'
import { GetUsecase } from '@/use-case/get'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function get(request: FastifyRequest, reply: FastifyReply) {
  try {
    const recomendationRepository = new RedisRecomendationsRepository()

    const getUseCase = new GetUsecase(recomendationRepository)

    const recomendations = await getUseCase.execute()

    return reply.status(201).send(recomendations)
  } catch (err) {
    console.log(err)
    return reply.status(500).send(err)
  }
}
