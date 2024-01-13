import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { search, setSearch, FiltersData, toSearch } = useFilters()

  function handleClick () {
    if (search === '') return
    FiltersData()
  }

  function handleChange (e) {
    setSearch(e.target.value)
  }

  return (
        <div>
            <input type="text" onChange={handleChange} placeholder={`search ${toSearch.toLowerCase()}...`} value={search}/>
            <input type="button" onClick={handleClick} value='search'/>
        </div>
  )
}
