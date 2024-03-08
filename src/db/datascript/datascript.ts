import ds from 'datascript'

const transact = ds.db_with
let db = ds.empty_db()

interface AddTodoAction {
  text: string
}

export const addTodo = (action: AddTodoAction) => {
  const transaction = [
    {
      ':db/id': -1,
      text: action.text,
      completed: false,
    },
  ]

  db = transact(db, transaction)
  return db
}

export const getTodo = () => {
  const query = `[:find ?e ?text ?completed
    :where [?e "text" ?text]
           [?e "completed" ?completed]]`

  return ds.q(query, db)
}
