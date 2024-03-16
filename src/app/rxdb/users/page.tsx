'use client'

import { useRxdbUser } from '@/hooks/useRxdbUser'

export default function RxdbUserPage() {
  const { fetchUsers } = useRxdbUser()
  fetchUsers()

  return <>RxdbUserPage</>
}
