'use client'

import { addTodo, getTodos } from '@/db/datascript/todo'

export default function UseDatascriptPage() {
  const onClickGet = () => {
    return console.log(getTodos())
  }

  const onClickAdd = () => {
    addTodo({
      text: 'test',
    })
  }

  return (
    <div>
      <h1>UseDatascriptPage</h1>
      <button onClick={onClickAdd}>Add Todo</button>
      <br />
      <button onClick={onClickGet}>Get Todo</button>
    </div>
  )
}