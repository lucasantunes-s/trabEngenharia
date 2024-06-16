import { Prisma } from '@prisma/client'
import { OrdersRepository } from '../orders-repository'
import { prisma } from '@/lib/prisma'

export class PrismaOrdersRepository implements OrdersRepository {
  async create(data: Prisma.OrderUncheckedCreateInput) {
    const order = await prisma.order.create({
      data,
    })

    return order
  }
}
