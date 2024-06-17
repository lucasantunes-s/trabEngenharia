import { Prisma, Referral } from '@prisma/client'

export interface ReferralRepository {
  create(data: Prisma.ReferralCreateInput): Promise<Referral>
}
