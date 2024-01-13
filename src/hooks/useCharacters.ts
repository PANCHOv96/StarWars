import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/globalContext'

export function useCharacters () {
  const { state, allChararacters } = useContext(GlobalContext)
  const { data: characters } = state

  useEffect(() => {
    allChararacters()
  }, [])

  return { characters }
}
