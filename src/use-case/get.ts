/* eslint-disable @typescript-eslint/no-explicit-any */
import { RecomendationsRepository } from '@/repositories/recomendation-respository'

interface RegisterUseCaseResponse {
  recomendation: any
}

export class GetUsecase {
  constructor(private recomendationRepository: RecomendationsRepository) {}

  async execute(): Promise<RegisterUseCaseResponse> {
    const recomendation = await this.recomendationRepository.get()

    return {
      recomendation,
    }
  }
}
