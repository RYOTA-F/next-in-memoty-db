'use client'

import { useDatascriptUser } from '@/hooks/useDatascriptUser'

export function DbUsersComponent() {
  const { users, fetchUsers } = useDatascriptUser()
  fetchUsers()

  if (!users.length) return <>None users</>

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
