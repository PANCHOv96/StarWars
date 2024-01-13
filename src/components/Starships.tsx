import { Link } from 'react-router-dom'
import { useStarShips } from '../hooks/useStarships'

export function Starships () {
  const { starships } = useStarShips()

  return (
        <>
            <h2>STARSHIPS</h2>
            {starships?.map(starship => {
              return (
                <div key={starship.name} className='Personaje'>
                    {starship.name}
                    <Link to={'info'} state={starship} >+</Link>
                </div>
              )
            })}
        </>
  )
}
