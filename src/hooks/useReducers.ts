import { useReducer } from 'react'
import { globalState, initialState } from '../reducers/globalState'
import { ACTION_GLOBAL_STATE } from '../actions/globalState'
import { StarWarsApi } from '../services/swapi'

export function useReducers () {
  const [state, dispatch] = useReducer(globalState, initialState)

  function allChararacters () {
    console.log('CUANTAS VECES SE EJECUTA')
    dispatch({ type: ACTION_GLOBAL_STATE.LOADING })
    StarWarsApi({ type: ACTION_GLOBAL_STATE.ALL_CHARACTERS.toLowerCase() })
      .then(
        response => { dispatch({ type: ACTION_GLOBAL_STATE.ALL_CHARACTERS, payload: response }) }
      )
      .catch(e => { console.log(e) })
  }

  function filter (payload) {
    dispatch({ type: ACTION_GLOBAL_STATE.LOADING })
    StarWarsApi({ type: state.type.toLowerCase(), search: payload })
      .then(
        response => { dispatch({ type: ACTION_GLOBAL_STATE.FILTER, payload: response }) }
      )
      .catch(e => { console.log(e) })
    // dispatch({ type: ACTION_GLOBAL_STATE.FILTER, payload })
  }

  function allFilms () {
    dispatch({ type: ACTION_GLOBAL_STATE.LOADING })
    StarWarsApi({ type: ACTION_GLOBAL_STATE.ALL_FILMS.toLowerCase() })
      .then(
        response => { dispatch({ type: ACTION_GLOBAL_STATE.ALL_FILMS, payload: response }) }
      )
      .catch(e => { console.log(e) })
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
