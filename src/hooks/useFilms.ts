import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/globalContext'

export function useFilms () {
  const { state, allFilms } = useContext(GlobalContext)
  const { data: films } = state

  useEffect(() => {
    allFilms()
  }, [])

  return { films }
}
