# Dashboard Statistics

A dashboard application that displays website visit statistics and customer data from a CRM system.

## Login Credentials

To access the dashboard, use the following credentials:

- Username: JeanLuc
- Password: password

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A Mockaroo API key

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/your-username/nextjs-dashboard.git
   cd nextjs-dashboard
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:

   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   MOCKAROO_API_KEY=your-mockaroo-api-key-here
   ```

   Replace `your-secret-key-here` with a random string and `your-mockaroo-api-key-here` with your actual Mockaroo API key.

4. Run the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Features

- Authentication using NextAuth.js
- Dashboard with website visit statistics
- Customer data table with search and pagination
- Data fetching using React Query
- Responsive design with Tailwind CSS

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

## License

This project is open source and available under the [MIT License](LICENSE).
