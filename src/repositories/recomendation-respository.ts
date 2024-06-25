export interface inputData {
  friendOne: string
  friendTwo: string
  client: string
  sale: string[]
  total: string | number
}

export interface RecomendationsRepository {
  create(data: inputData): Promise<{
    id: string
    friendOne: string
    friendTwo: string
    client: string
    sale: string[]
    total: string | number
  }>

  get(): Promise<
    {
      id: string
      friendOne: string
      friendTwo: string
      client: string
      sale: string[]
      total: string | number
    }[]
  >
}
