import { useContext } from 'react'
import useSWR from 'swr'
// import { setUsers, getAllUsers } from '@/db/datascript/users'
// import { $users } from '@/stores/users/users.state'
import { fetcher } from '@/utils/fetch'
import { User } from '@/db/datascript/users.types'
import { DB_ACTION_TYPES } from '@/stores/db/action'
import { DbContext } from '@/stores/db/context'

export const useDatascriptUser = () => {
  const { state, dispatch } = useContext(DbContext)

  /** ユーザー一覧 */
  const users = state.users

  /**
   * ユーザー一覧を取得
   */
  const fetchUsers = () => {
    useSWR<User[]>('https://jsonplaceholder.typicode.com/users', fetcher, {
      onSuccess: (data) => {
        dispatch({ type: DB_ACTION_TYPES.UPDATE_USERS, payload: data })
        // setUsers(data) // Datascriptにデータをセット
        // const users = getAllUsers() // DatascriptからUsersを取得
        // $users.set(users) // NanostoreにUsersをセット
      },
    })
  }

  return {
    users,
    fetchUsers,
  }
}
