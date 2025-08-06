import { createLogger } from 'graphql-yoga'

import { CUSTOMERS } from '../common/mock-db.js'

type ContactRef = { id: string }

const log = createLogger('info')

export const RESOLVERS = {
  Contact: {
    __resolveReference: (ref: ContactRef): ContactRef | null => {
      log.info('!!!!!!!!!!!!!!!! __resolveReference called for contact: ', ref)
      return CUSTOMERS[ref.id] ? ref : null
    },
    firstName: (ref: ContactRef): string => {
      log.info('!!!!!!!!!!!!!!!! firstName resolver called for contact: ', ref)
      return CUSTOMERS[ref.id].firstName
    },
    lastName: (ref: ContactRef): string => {
      log.info('!!!!!!!!!!!!!!!! lastName resolver called for contact: ', ref)
      return CUSTOMERS[ref.id].lastName
    },
    displayName: (ref: ContactRef): string => {
      log.info('!!!!!!!!!!!!!!!! displayName resolver called for contact: ', ref)
      return CUSTOMERS[ref.id].displayName
    },
    initials: (ref: ContactRef): string => {
      log.info('!!!!!!!!!!!!!!!! initials resolver called for contact: ', ref)
      return CUSTOMERS[ref.id].initials
    },
    pictureUrl: (ref: ContactRef): string => {
      log.info('!!!!!!!!!!!!!!!! pictureUrl resolver called for contact: ', ref)
      return CUSTOMERS[ref.id].pictureUrl
    },
    company: (ref: ContactRef): string => {
      log.info('!!!!!!!!!!!!!!!! company resolver called for contact: ', ref)
      return CUSTOMERS[ref.id].company
    },
    role: (ref: ContactRef): string => {
      log.info('!!!!!!!!!!!!!!!! role resolver called for contact: ', ref)
      return CUSTOMERS[ref.id].role
    },
  },
}

