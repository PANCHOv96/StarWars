// import { allPeople } from '../mocks/with-results-characters'
// import { allFilms } from '../mocks/with-results-films'
// import { allStarships } from '../mocks/with-results-starships'
// import { allVehicles } from '../mocks/with-results-vehicles'
// import { allSpecies } from '../mocks/with-results-species'
// import { allPlanets } from '../mocks/with-results-planets'
// import { StarWarsApi } from '../services/swapi'

export const ACTION_GLOBAL_STATE = {
  ALL_CHARACTERS: 'PEOPLE',
  FILTER: 'FILTER',
  ALL_FILMS: 'FILMS',
  ALL_PLANETS: 'PLANETS',
  ALL_SPECIES: 'SPECIES',
  ALL_STARSHIPS: 'STARSHIPS',
  ALL_VEHICLES: 'VEHICLES',
  LOADING: 'LOADING'
}

export const ActionGlobalState = {
  [ACTION_GLOBAL_STATE.ALL_CHARACTERS]: (state, action) => {
    return { ...state, data: action.payload, type: action.type, loading: false }
  },
  [ACTION_GLOBAL_STATE.FILTER]: (state, action) => {
    return { ...state, data: action.payload, type: state.type, loading: false }
  },
  [ACTION_GLOBAL_STATE.ALL_FILMS]: (state, action) => {
    return { ...state, data: action.payload, type: action.type, loading: false }
  },
  [ACTION_GLOBAL_STATE.ALL_STARSHIPS]: (state, action) => {
    return { ...state, data: action.payload, type: action.type, loading: false }
  },
  [ACTION_GLOBAL_STATE.ALL_VEHICLES]: (state, action) => {
    return { ...state, data: action.payload, type: action.type, loading: false }
  },
  [ACTION_GLOBAL_STATE.ALL_SPECIES]: (state,action) => {
    return { ...state, data: action.payload, type: action.type, loading: false }
  },
  [ACTION_GLOBAL_STATE.ALL_PLANETS]: (state, action) => {
    return { ...state, data: action.payload, type: action.type, loading: false }
  },
  [ACTION_GLOBAL_STATE.LOADING]: (state,action) => {
    return { ...state, data: [], loading: true }
  }
}
