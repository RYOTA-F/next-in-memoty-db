import { FC, createContext, useReducer } from 'react'
import { initialDbState } from './state'
import { dbReducer } from './reducer'
import {
  DbContext as DbContextType,
  DbContextProvider as DbContextProviderType,
} from './types'

export const DbContext = createContext<DbContextType>({
  state: initialDbState,
  dispatch: () => null,
})

export const DbContextProvider: FC<DbContextProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer(dbReducer, initialDbState)

  return (
    <DbContext.Provider value={{ state, dispatch }}>
      {children}
    </DbContext.Provider>
  )
}
