import { PrismaClientsRepository } from '@/repositories/prisma/prisma-clients-repository'
import { PrismaOrdersRepository } from '@/repositories/prisma/prisma-orders-repository'
import { RegisterUseCase } from '../register'

export default function makeRegisterUseCase() {
  const prismaOrdersRepository = new PrismaOrdersRepository()
  const prismaClientsRepository = new PrismaClientsRepository()
  const registerUseCase = new RegisterUseCase(
    prismaClientsRepository,
    prismaOrdersRepository,
  )

  return registerUseCase
}
