import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/globalContext'

export function useVehicles () {
  const { state, allVehicles } = useContext(GlobalContext)
  const { data: vehicles } = state

  useEffect(() => {
    allVehicles()
  }, [])

  return { vehicles }
}
