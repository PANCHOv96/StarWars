import { Link } from 'react-router-dom'
import { useSpecies } from '../hooks/useSpecies'

export function Species () {
    const { species } = useSpecies()

  return (
        <>
            <h2>SPECIES</h2>
            {species?.map(specie => {
              return (
                <div key={specie.url} className='Personaje'>
                    {specie.name}
                    <Link to={'info'} state={specie} >+</Link>
                </div>
              )
            })}
        </>
  )
}
