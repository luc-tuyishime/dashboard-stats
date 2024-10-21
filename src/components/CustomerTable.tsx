import React, { useState } from 'react'
import { Customer } from '@/types/customer'
import SearchBar from './SearchBar'
import { format, parse } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import usePagination from '@/hooks/usePagination'
import Pagination from './Pagination'

type CustomerTableProps = {
  data: Customer[]
}

const CustomerTable: React.FC<CustomerTableProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const itemsPerPage = 10

  const filteredData = React.useMemo(() => {
    if (!data || !Array.isArray(data)) return []

    return data.filter(
      (customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [data, searchTerm])

  const { currentItems, currentPage, totalPages, setCurrentPage } = usePagination({
    data: filteredData,
    itemsPerPage,
  })

  const formatDate = (dateString: string) => {
    try {
      const date = parse(dateString, 'M/d/yyyy', new Date())
      return format(date, 'MMM d, yyyy')
    } catch (error) {
      console.error('Error parsing date:', dateString, error)
      return dateString
    }
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Customer Data</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="bg-white rounded-lg overflow-hidden shadow">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Signup Date
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Activity
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentItems.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                    {customer.name}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                    {customer.email}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(customer.signupDate)}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(customer.lastActivity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}

export default CustomerTable
