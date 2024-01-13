import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/globalContext'

export function useStarShips () {
  const { state, allStarships } = useContext(GlobalContext)
  const { data: starships } = state

  useEffect(() => {
    allStarships()
  }, [])

  return { starships }
}
