import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

const Navbar: React.FC = () => {
  const { data: session } = useSession()

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/dashboard" className="text-lg font-semibold text-gray-800">
              Dashboard
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {session?.user && (
              <>
                <span className="text-gray-700">{session.user.name}</span>
                <button
                  onClick={() => signOut({ callbackUrl: '/login' })}
                  className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors duration-300"
                >
                  Sign out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
