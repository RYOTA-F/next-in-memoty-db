import ds from 'datascript'
import { v4 as uuid } from 'uuid'

const transact = ds.db_with
const db = { current: ds.empty_db() }

interface AddTodoAction {
  text: string
}

/**
 * Todoを追加
 */
export const addTodo = (action: AddTodoAction) => {
  const id = uuid()
  const transaction = [
    {
      ':db/id': -1,
      uniqueId: id,
      text: action.text,
      completed: false,
    },
  ]

  db.current = transact(db.current, transaction)
  return db.current
}

/**
 * Todo一覧を取得
 */
export const getTodos = () => {
  const query = `[:find ?e ?uniqueId ?text ?completed
    :where [?e "uniqueId" ?uniqueId]
           [?e "text" ?text]
           [?e "completed" ?completed]]`

  return ds.q(query, db.current)
}
