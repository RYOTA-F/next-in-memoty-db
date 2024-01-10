import { User } from '@/db/datascript/users.types'

const DB_ACTION_TYPES = {
  UPDATE_USERS: 'UPDATE_USERS',
} as const

type DbActionTypesConst = typeof DB_ACTION_TYPES
type DbActionTypes = DbActionTypesConst[keyof typeof DB_ACTION_TYPES]

/* ユーザー一覧更新 */
type UpdateUsersAction = {
  type: DbActionTypesConst['UPDATE_USERS']
  payload: User[]
}

type DbActions = UpdateUsersAction

export { DB_ACTION_TYPES, type DbActions, type DbActionTypes }
