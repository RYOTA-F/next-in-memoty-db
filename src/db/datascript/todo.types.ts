import type { TupleFromInterface } from '@/types/utility'

export interface AddTodoAction {
  text: string
}

export interface Todo {
  id: string
  text: string
  completed: boolean
}

export type TodoTuple = TupleFromInterface<Todo>
