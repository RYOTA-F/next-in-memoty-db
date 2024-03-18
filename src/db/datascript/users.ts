import ds from 'datascript'
import { User, UserTuple } from './users.types'

const transact = ds.db_with
const db = { users: ds.empty_db() }

/**
 * ユーザー一覧をセット
 */
export const setUsers = (users: User[]) => {
  db.users = transact(db.users, users)
  return db.users
}

/**
 * ユーザー一覧を取得
 */
export const getAllUsers = () => {
  const query = `
    [
      :find ?id ?name ?username ?email ?address ?phone ?website ?company
      :where
        [?e "id" ?id]
        [?e "name" ?name]
        [?e "username" ?username]
        [?e "email" ?email]
        [?e "address" ?address]
        [?e "phone" ?phone]
        [?e "website" ?website]
        [?e "company" ?company]
    ]
  `

  const res: UserTuple[] = ds.q(query, db.users)
  const users = convertUsers(res)

  return users.sort((a, b) => a.id - b.id)
}

/**
 * ユーザーデータ一覧に変換
 */
const convertUsers = (dataFromDs: UserTuple[]): User[] => {
  return dataFromDs.map(
    ([id, name, username, email, address, phone, website, company]) => ({
      id,
      name,
      username,
      email,
      address,
      phone,
      website,
      company,
    }),
  ) as User[]
}
