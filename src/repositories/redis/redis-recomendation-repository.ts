/* eslint-disable camelcase */
import {
  RecomendationsRepository,
  inputData,
} from '../recomendation-respository'
import { redisClient } from '@/lib/redis'
import { randomUUID } from 'crypto'

export class RedisRecomendationsRepository implements RecomendationsRepository {
  async get() {
    const clientRedis = await redisClient()

    const keys = await clientRedis.keys('recommendation:*')
    const recommendations = []

    for (const key of keys) {
      const recommendation = await clientRedis.get(key)
      if (recommendation) {
        recommendations.push(JSON.parse(recommendation))
      }
    }

    return recommendations
  }

  async create({ client, friendOne, friendTwo, total, sale }: inputData) {
    const clientRedis = await redisClient()

    const recommendation = {
      id: randomUUID(), // Ensure the id field is included
      friendOne,
      friendTwo,
      total,
      sale,
      client,
    }

    const key = `recommendation:${recommendation.id}` // Use the generated id for the key
    await clientRedis.set(key, JSON.stringify(recommendation))
    return recommendation // Return the full data, including the id
  }
}
