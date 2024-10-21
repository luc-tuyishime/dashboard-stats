# Dashboard Statistics

A dashboard application that displays website visit statistics and customer data from a CRM system.

## Deployment

The application is deployed and can be accessed at:

[https://dashboard-stats-hzok61fts-luc-tuyishimes-projects.vercel.app/dashboard](https://dashboard-stats-hzok61fts-luc-tuyishimes-projects.vercel.app/dashboard)

## Login Credentials

To access the dashboard, use the following credentials:

- Username: JeanLuc
- Password: password

## Prerequisites

- Node.js (v14 or later)
- npm or yarn

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/luc-tuyishime/dashboard-stats.git
   cd dashboard-stats
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Features

- Authentication using NextAuth.js
- Dashboard with website visit statistics
- Customer data table with search and pagination
- Data fetching using React Query
- Responsive design with Tailwind CSS
- Client-side caching

## Folder Structure

- `src/components`: React components
- `src/pages`: Next.js pages and API routes
- `src/types`: TypeScript type definitions
- `src/styles`: Global styles

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Recharts
- React Query
- NextAuth.js
