import React, { ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Navbar from './Navbar'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { data: session, status } = useSession()
  const router = useRouter()

  const isLoginPage = router.pathname === '/login'
  const showNavbar = status === 'authenticated' && !isLoginPage

  return (
    <div className="min-h-screen bg-white">
      {showNavbar && <Navbar />}
      <main className={`container mx-auto px-4 py-8 ${showNavbar ? 'pt-20' : ''}`}>{children}</main>
    </div>
  )
}

export default Layout
