import { expect, describe, it } from 'vitest'
import { RegisterUseCase } from './register'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

describe('Register Use Case', () => {
  it('should hash user password upon registration', async () => {
    const prismaUsersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(prismaUsersRepository)

    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'johdoe@example.com',
      password: '123456',
    })

    console.log(user.password_hash)
  })
})