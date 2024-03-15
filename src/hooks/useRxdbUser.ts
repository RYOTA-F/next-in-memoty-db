import useSWR from 'swr'
import { useStore } from '@nanostores/react'
import { $users } from '@/stores/users/users.state'
import { fetcher } from '@/utils/fetch'
import { User } from '@/db/datascript/users.types'

export const useRxdbUser = () => {
  /** ユーザー一覧 */
  const users = useStore($users)

  /**
   * ユーザー一覧を取得
   */
  const fetchUsers = () => {
    useSWR<User[]>('https://jsonplaceholder.typicode.com/users', fetcher, {
      onSuccess: (data) => {
        console.log(data)
        // Datascriptにデータをセット
        // setUsers(data)
        // DatascriptからUsersを取得
        // const users = getAllUsers()
        // NanostoreにUsersをセット
        // $users.set(users)
      },
    })
  }

  return {
    users,
    fetchUsers,
  }
}
