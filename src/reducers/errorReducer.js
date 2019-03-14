import { SET_ERRORS } from '../constance/actionTypes'

const initialState = {}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_ERRORS:
      return action.payload
    default:
      return state
  }
}