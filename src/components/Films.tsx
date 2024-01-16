import { Link } from 'react-router-dom'
import { useFilms } from '../hooks/useFilms'

export function Films () {
  const { films } = useFilms()

  return (
    <>
        <h2>FILMS</h2>
        {films?.map(film => {
          return (
            <div key={film.url} className='Personaje'>
                {film.title}
                <Link to={'info'} state={film} >+</Link>
            </div>
          )
        })}
    </>
  )
}
