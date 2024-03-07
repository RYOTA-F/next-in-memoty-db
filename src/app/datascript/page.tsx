'use client'

import { addTodo } from '@/db/datascript/datascript'

export default function UseDatascriptPage() {
  addTodo()

  return <h1>UseDatascriptPage</h1>
}
