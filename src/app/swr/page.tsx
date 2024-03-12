'use client'

import { useTest } from '@/hooks/useTest'

export default function UseSwrPage() {
  const { data } = useTest()

  return (
    <div>
      <h1>SWR Page</h1>
      {data && data.map((user: any) => <div key={user.id}>{user.name}</div>)}
    </div>
  )
}
