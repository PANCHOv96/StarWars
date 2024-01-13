import { createContext } from 'react'
import { useReducers } from '../hooks/useReducers'

export const GlobalContext = createContext()

export function GlobalProvider ({ children }) {
  const globalState = useReducers()

  return (
        <GlobalContext.Provider value={globalState}>
            {children}
        </GlobalContext.Provider>
  )
}
