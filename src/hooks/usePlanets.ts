import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/globalContext'

export function usePlanets () {
  const { state, allPlanets } = useContext(GlobalContext)
  const { data: planets } = state

  useEffect(() => {
    allPlanets()
  }, [])

  return { planets }
}
