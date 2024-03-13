'use client'

import { DbContextProvider } from '@/stores/db/context'
import { DbUsersComponent } from './components/dbUser'

export default function DatascriptUserPage() {
  return (
    <DbContextProvider>
      <DbUsersComponent />
    </DbContextProvider>
  )
}
