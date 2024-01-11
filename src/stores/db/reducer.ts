import { Reducer } from 'react'
import { DbActions, DB_ACTION_TYPES } from './action'
import { DbState } from './state'

export const dbReducer: Reducer<DbState, DbActions> = (state, action) => {
  switch (action.type) {
    // ユーザー 一覧 更新
    case DB_ACTION_TYPES.UPDATE_USERS:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}
