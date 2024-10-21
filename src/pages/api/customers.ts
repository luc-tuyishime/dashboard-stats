import type { NextApiRequest, NextApiResponse } from 'next'
import { Customer } from '@/types/customer'
import { getSession } from 'next-auth/react'

const MOCKAROO_API_KEY = process.env.MOCKAROO_API_KEY

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Customer[] | { error: string }>
) {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const response = await fetch(
      `https://my.api.mockaroo.com/customers.json?key=${MOCKAROO_API_KEY}`
    )
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customer data' })
  }
}
