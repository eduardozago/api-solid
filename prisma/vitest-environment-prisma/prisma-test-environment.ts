import { Environment } from 'vitest'

export default <Environment>(<unknown>{
  name: 'prisma',
  transformMode: 'web',
  async setup() {
    console.log('Executed')
    return {
      async teardown() {
        console.log('Teardown')
      },
    }
  },
})
