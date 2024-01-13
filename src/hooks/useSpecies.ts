import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/globalContext'

export function useSpecies () {
  const { state, allSpecies } = useContext(GlobalContext)
  const { data: species } = state

  useEffect(() => {
    allSpecies()
  }, [])

  return { species }
}
