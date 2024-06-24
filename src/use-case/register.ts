import { ClientsRepository } from '@/repositories/clients-repository'
import { OrdersRepository } from '@/repositories/orders-repository'
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
}

export class RegisterUseCase {
  constructor(
    private clientsRepository: ClientsRepository,
    private ordersRepository: OrdersRepository,
    private referralRepository: ReferralRepository,
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

    return {
      client,
      order,
      referral,
    }
  }
}
