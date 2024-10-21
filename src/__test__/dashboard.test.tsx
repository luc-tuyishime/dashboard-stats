const React = require('react')
import * as RTL from '@testing-library/react'

const { useSession } = require('next-auth/react')
const { useQuery } = require('react-query')
const Dashboard = require('@/pages/dashboard').default

const { screen, render } = RTL

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}))

jest.mock('react-query', () => ({
  useQuery: jest.fn(),
}))

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

// Mock Recharts if you're using it
jest.mock('recharts', () => ({
  ResponsiveContainer: ({ children }) => children,
  LineChart: () => <div data-testid="line-chart" />,
  BarChart: () => <div data-testid="bar-chart" />,
  // Add other components as needed
}))

describe('Dashboard Page', () => {
  it('renders loading state', () => {
    useSession.mockReturnValue({ status: 'loading' })
    useQuery.mockReturnValue({ isLoading: true })

    render(<Dashboard />)

    // Check for various possible loading indicators
    const loadingElement =
      screen.queryByText(/loading/i) ||
      screen.queryByRole('progressbar') ||
      screen.queryByTestId('loading-spinner')

    expect(loadingElement).toBeInTheDocument()
  })

  it('renders dashboard content when authenticated', () => {
    useSession.mockReturnValue({
      status: 'authenticated',
      data: { user: { name: 'JeanLuc' } },
    })

    const mockVisitData = [{ id: 1, views: 100, unique_visitors: 50 }]
    const mockCustomerData = [{ id: 1, name: 'Customer 1', email: 'customer1@example.com' }]

    useQuery.mockImplementation((queryKey) => {
      if (queryKey === 'visits') {
        return { data: mockVisitData, isLoading: false }
      }
      if (queryKey === 'customers') {
        return { data: mockCustomerData, isLoading: false }
      }
    })

    render(<Dashboard />)
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
    expect(screen.getByText(/customer data/i)).toBeInTheDocument()
  })

  it('redirects to login when not authenticated', () => {
    useSession.mockReturnValue({ status: 'unauthenticated' })

    render(<Dashboard />)
    expect(screen.queryByText(/dashboard/i)).not.toBeInTheDocument()
  })
})
