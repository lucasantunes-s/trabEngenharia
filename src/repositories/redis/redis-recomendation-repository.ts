import { Prisma } from '@prisma/client'
import { RecomendationsRepository } from '../recomendation-respository'
import { redisClient } from '@/lib/redis'

export class RedisRecomendationsRepository implements RecomendationsRepository {
  async create(data: Prisma.RecomendationCreateInput) {
    const client = redisClient()
    await (
      await client
    ).hSet('user-session:123', {
        friend_one: data.friend_one
        friend_two: data.friend_two
        sale: data.sale
        total: data.total
        clientId: data.client
    })

    return recomendation
  }
}
