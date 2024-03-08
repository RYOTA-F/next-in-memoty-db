'use client'

import { addTodo, getTodo } from '@/db/datascript/datascript'

export default function UseDatascriptPage() {
  const onClickGet = () => {
    return console.log(getTodo())
  }

  const onClickAdd = () => {
    addTodo({
      text: 'test',
    })
  }

  return (
    <>
      <h1>UseDatascriptPage</h1>
      <button onClick={onClickAdd}>Add Todo</button>
      <button onClick={onClickGet}>Get Todo</button>
    </>
  )
}
