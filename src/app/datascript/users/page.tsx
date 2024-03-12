'use client'

import { useUser } from '@/hooks/useUser'

export default function DatascriptTodoPage() {
  const { users, fetchUsers } = useUser()
  fetchUsers()

  if (!users.length) return <>None users...</>

  return (
    <>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </>
  )
}
