import { createClient } from 'redis'

export async function redisClient() {
  const client = createClient({
    url: 'redis://localhost:6379', // Specify the Redis service URL
  })

  client.on('error', (err) => console.log('Redis Client Error', err))

  await client.connect()

  return client
}
