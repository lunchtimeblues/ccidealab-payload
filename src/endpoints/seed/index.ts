import type { Endpoint } from 'payload'

const seed: Endpoint = {
  path: '/seed',
  method: 'get',
  handler: async (req) => {
    const { payload } = req

    try {
      // Add your seeding logic here
      // For now, just return a success message
      return Response.json({
        success: true,
        message: 'Seed endpoint is working'
      })
    } catch (error) {
      return Response.json({
        success: false,
        message: 'Seed failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      }, { status: 500 })
    }
  },
}

export default seed
export { seed }
