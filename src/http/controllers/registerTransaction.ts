import makeRegisterUseCase from '@/use-case/factories/make-register-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    cpf: z.string(),
    name: z.string(),
    city: z.string(),
    uf: z.string(),
    address: z.string(),
    email: z.string(),
    product: z.array(z.string()),
    total: z.number(),
    friends: z.array(z.string()),
  })

  const { address, city, cpf, email, name, product, total, uf, friends } =
    registerBodySchema.parse(request.body)

  try {
    const registerUseCase = makeRegisterUseCase()

    const transaction = await registerUseCase.execute({
      address,
      city,
      cpf,
      email,
      name,
      product,
      total,
      uf,
      friends,
    })

    return reply.status(201).send(transaction)
  } catch (err) {
    console.log(err)
    return reply.status(500).send(err)
  }
}
