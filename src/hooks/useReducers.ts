import { useReducer } from 'react'
import { globalState, initialState } from '../reducers/globalState'
import { ACTION_GLOBAL_STATE } from '../actions/globalState'

export function useReducers () {
  const [state, dispatch] = useReducer(globalState, initialState)

  function allChararacters () {
    console.log('CUANTAS VECES SE EJECUTA')
    dispatch({ type: ACTION_GLOBAL_STATE.ALL_CHARACTERS })
  }

  function filter (payload) {
    dispatch({ type: ACTION_GLOBAL_STATE.FILTER, payload })
  }

  function allFilms () {
    dispatch({ type: ACTION_GLOBAL_STATE.ALL_FILMS })
  }

  function allStarships () {
    dispatch({ type: ACTION_GLOBAL_STATE.ALL_STARSHIPS })
  }
  function allVehicles () {
    dispatch({ type: ACTION_GLOBAL_STATE.ALL_VEHICLES })
  }
  function allSpecies () {
    dispatch({ type: ACTION_GLOBAL_STATE.ALL_SPECIES })
  }
  function allPlanets () {
    dispatch({ type: ACTION_GLOBAL_STATE.ALL_PLANETS })
  }

  return { state, filter, allChararacters, allFilms, allStarships, allVehicles, allSpecies, allPlanets }
}
