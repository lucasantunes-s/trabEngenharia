import { ClientsRepository } from '@/repositories/clients-repository'
import { OrdersRepository } from '@/repositories/orders-repository'
import { RecomendationsRepository } from '@/repositories/recomendation-respository'
import { ReferralRepository } from '@/repositories/referreal-repository'
import { Client, Order, Referral } from '@prisma/client'

interface RegisterUseCaseRequest {
  cpf: string
  name: string
  city: string
  uf: string
  address: string
  email: string
  product: string[]
  total: number
  friends: string[]
}

interface RegisterUseCaseResponse {
  client: Client
  order: Order
  referral: Referral
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recomendation: any
}

export class RegisterUseCase {
  constructor(
    private clientsRepository: ClientsRepository,
    private ordersRepository: OrdersRepository,
    private referralRepository: ReferralRepository,
    private recomendationRepository: RecomendationsRepository,
  ) {}

  async execute({
    city,
    cpf,
    email,
    name,
    product,
    total,
    uf,
    address,
    friends,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const client = await this.clientsRepository.create({
      address,
      city,
      cpf,
      email,
      name,
      uf,
    })

    const order = await this.ordersRepository.create({
      clientId: client.id,
      total,
      product,
    })

    const referral = await this.referralRepository.create({
      cpf,
      name,
      friends,
      email,
    })

    const friendOne = friends[0]
    const friendTwo = friends[1]

    const recomendation = await this.recomendationRepository.create({
      client: name,
      friendOne,
      friendTwo,
      sale: product,
      total,
    })

    return {
      client,
      order,
      referral,
      recomendation,
    }
  }
}
