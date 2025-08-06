import path from 'node:path'

import { startServer } from '../common/server.js'
import { RESOLVERS } from './contact-resolver.js'

const schemaPath = path.join(import.meta.dirname, 'schema')

try {
  const server = await startServer({
    port: 4110,
    schemaPath,
    resolvers: RESOLVERS,
  })

  console.log(`Contact server running on ${server.address}`)
} catch (error) {
  console.error('Failed to start contact server', error)
}