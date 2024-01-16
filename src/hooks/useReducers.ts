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
    StarWarsApi({ type: ACTION_GLOBAL_STATE.ALL_STARSHIPS.toLowerCase() })
      .then(
        response => { dispatch({ type: ACTION_GLOBAL_STATE.ALL_STARSHIPS, payload: response }) }
      )
      .catch(e => { console.log(e) })
  }
  function allVehicles () {
    dispatch({ type: ACTION_GLOBAL_STATE.ALL_VEHICLES })
    StarWarsApi({ type: ACTION_GLOBAL_STATE.ALL_VEHICLES.toLowerCase() })
      .then(
        response => { dispatch({ type: ACTION_GLOBAL_STATE.ALL_VEHICLES, payload: response }) }
      )
      .catch(e => { console.log(e) })
  }
  function allSpecies () {
    dispatch({ type: ACTION_GLOBAL_STATE.ALL_SPECIES })
    StarWarsApi({ type: ACTION_GLOBAL_STATE.ALL_SPECIES.toLowerCase() })
      .then(
        response => { dispatch({ type: ACTION_GLOBAL_STATE.ALL_SPECIES, payload: response }) }
      )
      .catch(e => { console.log(e) })
  }
  function allPlanets () {
    dispatch({ type: ACTION_GLOBAL_STATE.ALL_PLANETS })
    StarWarsApi({ type: ACTION_GLOBAL_STATE.ALL_PLANETS.toLowerCase() })
      .then(
        response => { dispatch({ type: ACTION_GLOBAL_STATE.ALL_PLANETS, payload: response }) }
      )
      .catch(e => { console.log(e) })
  }

  return { state, filter, allChararacters, allFilms, allStarships, allVehicles, allSpecies, allPlanets }
}
