import ds from 'datascript'
import { v4 as uuid } from 'uuid'
import type { AddTodoAction, TodoTuple } from './todo.types'

const transact = ds.db_with
const db = { current: ds.empty_db() }

/**
 * Todoを追加
 */
export const addTodo = (action: AddTodoAction) => {
  const transaction = {
    id: uuid(),
    text: action.text,
    completed: false,
  }

  db.current = transact(db.current, [transaction])
  return db.current
}

/**
 * Todo一覧を取得
 */
export const getTodos = () => {
  const query = `
    [
      :find ?id ?text ?completed
      :where
        [?e "id" ?id]
        [?e "text" ?text]
        [?e "completed" ?completed]
    ]
  `

  const res = ds.q(query, db.current)

  return res.map(([id, text, completed]: TodoTuple) => ({
    id,
    text,
    completed,
  }))
}
