import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { VisitData } from '@/types/visit'

type VisitorsChartProps = {
  data: VisitData[] | undefined
}

const VisitorsChart: React.FC<VisitorsChartProps> = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Website Visits</h2>
        <p>No data available</p>
      </div>
    )
  }

  const limitedData = data.slice(-30)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl  mb-4 text-gray-800">Website Visits (Last 30 Data Points)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={limitedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="views" fill="#991b1b" name="Page Views" />
          <Bar dataKey="unique_visitors" fill="#facc15" name="Unique Visitors" />
          <Bar dataKey="bounce_rate" fill="#6d28d9" name="Bounce Rate" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VisitorsChart
