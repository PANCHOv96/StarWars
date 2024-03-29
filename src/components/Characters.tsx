import { Link } from 'react-router-dom'
import { useCharacters } from '../hooks/useCharacters'

export function Characters () {
  const { characters, loading } = useCharacters()

  return (
      <>
        { loading && <>CARGANDO</> }
        <h2>CHARACTERS</h2>
        {characters?.map(character => {
          return (
            <div key={character.url} className='Personaje'>
                {character.name}
                <Link to={'info'} state={character} key={character.url}>+</Link>
            </div>
          )
        })}
      </>
  )
}
