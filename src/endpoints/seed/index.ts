import type { Payload } from 'payload'

interface SeedParams {
  payload: Payload
  req: unknown
}

export const seed = async ({ payload: _payload, req: _req }: SeedParams): Promise<void> => {
  try {
    // Add your seeding logic here
    console.log('Seeding data...')

    // Example: Create some initial data
    // await payload.create({
    //   collection: 'pages',
    //   data: {
    //     title: 'Home',
    //     slug: 'home',
    //     // ... other fields
    //   },
    //   req,
    // })

    console.log('Seeding completed successfully')
  } catch (error) {
    console.error('Seeding failed:', error)
    throw error
  }
}

export default seed
