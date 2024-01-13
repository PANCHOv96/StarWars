import { ActionGlobalState } from '../actions/globalState'

export const initialState = {
  data: [],
  type: ''
}

export function globalState (state = initialState, action) {
  const updateState = ActionGlobalState[action.type]
  return updateState(state, action) || state
}
