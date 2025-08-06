import path from 'node:path'

import { startServer } from '../common/server.js'
import { RESOLVERS } from './search-resolver.js'

const schemaPath = path.join(import.meta.dirname, 'schema')

try {
  const server = await startServer({
    port: 4111,
    schemaPath,
    resolvers: RESOLVERS,
  })

  console.log(`Search server running on ${server.address}`)
} catch (error) {
  console.error('Failed to start search server', error)
}