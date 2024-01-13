import { Link } from 'react-router-dom'

export function NavBar () {
  return (
        <>
            <Link to={'/characters'} >Characters</Link>
            <br />
            <Link to={'/films'} >Films</Link>
            <br />
            <Link to={'/starships'} >Starships</Link>
            <br />
            <Link to={'/vehicles'} >Vehicles</Link>
            <br />
            <Link to={'/species'} >Species</Link>
            <br />
            <Link to={'/planets'} >Planets</Link>
        </>
  )
}
