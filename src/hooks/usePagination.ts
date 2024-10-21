import { useState, useMemo } from 'react'

interface UsePaginationProps<T> {
  data: T[]
  itemsPerPage: number
}

interface UsePaginationResult<T> {
  currentItems: T[]
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
}

function usePagination<T>({ data, itemsPerPage }: UsePaginationProps<T>): UsePaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / itemsPerPage)

  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    return data.slice(indexOfFirstItem, indexOfLastItem)
  }, [data, currentPage, itemsPerPage])

  return {
    currentItems,
    currentPage,
    totalPages,
    setCurrentPage,
  }
}

export default usePagination
