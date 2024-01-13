import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function InfoCharacters () {
  const { state } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (state == null) {
      navigate('/')
    }
  }, [])

  return (
      <>
        <h2>INFO PERSONAJE</h2>
        <div>
          <p>name: {state?.name}</p>
          <p>skin_color: {state?.skin_color}</p>
          <p>starships: {state?.starships[0]}</p>
          <p>height: {state?.height}</p>
        </div>
      </>
  )
}
