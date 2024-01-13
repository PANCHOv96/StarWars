import { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../context/globalContext'

export function useFilters () {
  const [search, setSearch] = useState('')
  const { state, filter } = useContext(GlobalContext)
  const isFirst = useRef(true)

  useEffect(() => {
    setSearch('')
    isFirst.current = true
  }, [state.type])

  useEffect(() => {
    if (search === '' && !isFirst.current) {
      FiltersData()
    }
    return () => {
      isFirst.current = false
    }
  }, [search])

  function FiltersData () {
    filter(search)
  }

  return { search, setSearch, FiltersData, toSearch: state.type }
}
