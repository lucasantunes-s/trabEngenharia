import { Prisma } from '@prisma/client'
import { ReferralRepository } from '../referreal-repository'
import { MongoClient } from '@/lib/mongo'
import { randomUUID } from 'crypto'

export class MongoReferralRepository implements ReferralRepository {
  async create(data: Prisma.ReferralCreateInput): Promise<{
    id: string
    name: string
    cpf: string
    email: string
    friends: string[]
  }> {
    try {
      const newReferral = new MongoClient({
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        friends: data.friends || [],
        objectID: randomUUID(),
      })

      const savedReferral = await newReferral.save()

      return {
        id: savedReferral._id.toString(),
        name: savedReferral.name || 'Lucas Antunes',
        cpf: savedReferral.cpf || '08424145925',
        email: savedReferral.email,
        friends: savedReferral.friends,
      }
    } catch (error) {
      console.error('Error creating document in MongoDB:', error)
      throw error
    }
  }
}
