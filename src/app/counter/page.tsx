'use client'

import { useStore } from '@nanostores/react'
import { $counter } from '@/stores/counter/counter.state'

export default function CounterPage() {
  const count = useStore($counter)

  const addCount = () => {
    $counter.set(count + 1)
  }

  return (
    <main className="flex items-center justify-center p-40">
      <div>
        <h1>{count}</h1>

        <button onClick={addCount}>+</button>
      </div>
    </main>
  )
}
