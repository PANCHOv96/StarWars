import { Link } from 'react-router-dom'
import { useCharacters } from '../hooks/useCharacters'

export function Characters () {
  const { characters } = useCharacters()

  return (
      <>
        <h2>CHARACTERS</h2>
        {characters?.map(character => {
          return (
            <div key={character.name} className='Personaje'>
                {character.name}
                <Link to={'info'} state={character} >+</Link>
            </div>
          )
        })}
      </>
  )
}
