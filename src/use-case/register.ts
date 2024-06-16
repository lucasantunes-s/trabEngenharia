import { ClientsRepository } from '@/repositories/clients-repository'
import { OrdersRepository } from '@/repositories/orders-repository'
import { Client, Order } from '@prisma/client'

interface RegisterUseCaseRequest {
  cpf: string
  name: string
  city: string
  uf: string
  address: string
  email: string
  product: string[]
  total: number
}

interface RegisterUseCaseResponse {
  client: Client
  order: Order
}

export class RegisterUseCase {
  constructor(
    private clientsRepository: ClientsRepository,
    private ordersRepository: OrdersRepository,
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

    return {
      client,
      order,
    }
  }
}
