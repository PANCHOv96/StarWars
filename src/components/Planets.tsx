import { Link } from 'react-router-dom'
import { usePlanets } from '../hooks/usePlanets'

export function Planets () {
    const { planets } = usePlanets()

  return (
        <>
            <h2>PLANETS</h2>
            {planets?.map(planet => {
              return (
                <div key={planet.url} className='Personaje'>
                    {planet.name}
                    <Link to={'info'} state={planet} >+</Link>
                </div>
              )
            })}
        </>
  )
}
