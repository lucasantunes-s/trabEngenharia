import { PrismaClientsRepository } from '@/repositories/prisma/prisma-clients-repository'
import { PrismaOrdersRepository } from '@/repositories/prisma/prisma-orders-repository'
import { RegisterUseCase } from '../register'
import { MongoReferralRepository } from '@/repositories/mongo/mongo-referral-repository'
import { RedisRecomendationsRepository } from '@/repositories/redis/redis-recomendation-repository'

export default function makeRegisterUseCase() {
  const prismaOrdersRepository = new PrismaOrdersRepository()
  const prismaClientsRepository = new PrismaClientsRepository()
  const mongoReferralRepository = new MongoReferralRepository()
  const redisRecomendationsRepository = new RedisRecomendationsRepository()
  const registerUseCase = new RegisterUseCase(
    prismaClientsRepository,
    prismaOrdersRepository,
    mongoReferralRepository,
    redisRecomendationsRepository,
  )

  return registerUseCase
}
