import { allPeople } from '../mocks/with-results-characters'
import { allFilms } from '../mocks/with-results-films'
import { allStarships } from '../mocks/with-results-starships'
import { allVehicles } from '../mocks/with-results-vehicles'
import { allSpecies } from '../mocks/with-results-species'
import { allPlanets } from '../mocks/with-results-planets'

export const ACTION_GLOBAL_STATE = {
  ALL_CHARACTERS: 'CHARACTERS',
  FILTER: 'FILTER',
  ALL_FILMS: 'FILMS',
  ALL_PLANETS: 'PLANETS',
  ALL_SPECIES: 'SPECIES',
  ALL_STARSHIPS: 'STARSHIPS',
  ALL_VEHICLES: 'VEHICLES'
}

export const ActionGlobalState = {
  [ACTION_GLOBAL_STATE.ALL_CHARACTERS]: () => {
    const newData = allPeople
    return { data: newData, type: ACTION_GLOBAL_STATE.ALL_CHARACTERS }
  },
  [ACTION_GLOBAL_STATE.FILTER]: (state, action) => {
    const { payload: textSearch } = action
    console.log('estado', state)
    console.log('payload', action)
    if (textSearch === '') return state
    let newData = []
    if (state.type !== ACTION_GLOBAL_STATE.ALL_FILMS) {
      newData = state.data?.filter(dataToFilter => dataToFilter.name.toLowerCase().includes(textSearch.toLowerCase()))
    } else {
      newData = state.data?.filter(dataToFilter => dataToFilter.title.toLowerCase().includes(textSearch.toLowerCase()))
    }
    return { data: newData, state: state.type }
  },
  [ACTION_GLOBAL_STATE.ALL_FILMS]: () => {
    const newData = allFilms
    return { data: newData, type: ACTION_GLOBAL_STATE.ALL_FILMS }
  },
  [ACTION_GLOBAL_STATE.ALL_STARSHIPS]: () => {
    const newData = allStarships
    return { data: newData, type: ACTION_GLOBAL_STATE.ALL_STARSHIPS }
  },
  [ACTION_GLOBAL_STATE.ALL_VEHICLES]: () => {
    const newData = allVehicles
    return { data: newData, type: ACTION_GLOBAL_STATE.ALL_VEHICLES }
  },
  [ACTION_GLOBAL_STATE.ALL_SPECIES]: () => {
    const newData = allSpecies
    return { data: newData, type: ACTION_GLOBAL_STATE.ALL_SPECIES }
  },
  [ACTION_GLOBAL_STATE.ALL_PLANETS]: () => {
    const newData = allPlanets
    return { data: newData, type: ACTION_GLOBAL_STATE.ALL_PLANETS }
  }
}
