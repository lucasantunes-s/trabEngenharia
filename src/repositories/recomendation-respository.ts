import { Prisma, Recomendation } from '@prisma/client'

export interface RecomendationsRepository {
  create(data: Prisma.RecomendationCreateInput): Promise<Recomendation>
}
