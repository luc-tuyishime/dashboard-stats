import { useQuery } from 'react-query'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import VisitorsChart from '@/components/VisitorsChart'
import CustomerTable from '@/components/CustomerTable'
import { VisitData } from '@/types/visit'
import { Customer } from '@/types/customer'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const { data: visitData, isLoading: visitLoading } = useQuery<VisitData[]>(
    'visits',
    () => fetch('/api/visits').then((res) => res.json()),
    {
      staleTime: 60000,
      refetchInterval: 300000,
      refetchOnWindowFocus: false,
    }
  )

  const { data: customerData, isLoading: customerLoading } = useQuery<Customer[]>(
    'customers',
    () => fetch('/api/customers').then((res) => res.json()),
    {
      staleTime: 60000,
      refetchInterval: 300000,
      refetchOnWindowFocus: false,
    }
  )

  if (status === 'unauthenticated') {
    router.push('/login')
    return null
  }

  if (status === 'loading' || visitLoading || customerLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-8">
        {visitData && <VisitorsChart data={visitData} />}
        {customerData && <CustomerTable data={customerData} />}
      </div>
    </Layout>
  )
}
