import { atom } from 'nanostores'
import { User } from '@/db/datascript/users.types'

export const $users = atom<User[]>([])
