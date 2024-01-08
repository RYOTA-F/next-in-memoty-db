import { ReactNode } from 'react'
import { User } from '@/db/datascript/users.types'
import { DbActions } from './action'

export interface DbState {
  users: User[]
}

import { Dispatch } from 'react'

export interface DbContext {
  state: DbState
  dispatch: Dispatch<DbActions>
}

export interface DbContextProvider {
  children: ReactNode
}
