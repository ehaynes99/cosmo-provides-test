type Customer = {
  id: string
  firstName: string
  lastName: string
  displayName: string
  initials: string
  pictureUrl: string
  company: string
  role: string
}

export const CUSTOMERS: Record<string, Customer> = {
  customer1: {
    id: 'customer1',
    firstName: 'John',
    lastName: 'Smith',
    displayName: 'John Smith',
    initials: 'JS',
    pictureUrl: 'https://example.com/avatars/john-smith.jpg',
    company: 'Acme Corp',
    role: 'CEO',
  },
  customer2: {
    id: 'customer2',
    firstName: 'Jane',
    lastName: 'Doe',
    displayName: 'Jane Doe',
    initials: 'JD',
    pictureUrl: 'https://example.com/avatars/jane-doe.jpg',
    company: 'Tech Solutions Inc',
    role: 'CTO',
  },
  customer3: {
    id: 'customer3',
    firstName: 'Bob',
    lastName: 'Johnson',
    displayName: 'Bob Johnson',
    initials: 'BJ',
    pictureUrl: 'https://example.com/avatars/bob-johnson.jpg',
    company: 'StartupXYZ',
    role: 'Founder',
  },
  customer4: {
    id: 'customer4',
    firstName: 'Alice',
    lastName: 'Brown',
    displayName: 'Alice Brown',
    initials: 'AB',
    pictureUrl: 'https://example.com/avatars/alice-brown.jpg',
    company: 'Global Enterprises',
    role: 'VP Marketing',
  },
}

export type { Customer }