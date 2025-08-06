import { CUSTOMERS } from '../common/mock-db.js'

type ContactNode = {
  id: string
  displayName: string
}

const loadContacts = (): ContactNode[] => {
  return Object.values(CUSTOMERS)
    .slice(0, 2)
    .map(({ id, displayName }) => ({ id, displayName }))
}

export const RESOLVERS = {
  Query: {
    contacts: (): any => {
      const nodes = loadContacts()

      return {
        nodes,
        edges: nodes.map((node) => ({ cursor: node.id, node })),
        pageInfo: {
          hasPreviousPage: false,
          hasNextPage: true,
          startCursor: nodes[0].id,
          endCursor: nodes[nodes.length - 1].id,
        },
      }
    },
  },
}
