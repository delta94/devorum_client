import { REGISTER_DONE, REGISTER_FAIL } from '../actions/types'

const initialState = {
  isAuthenticated: false,
  user: {},
  errors: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_DONE:
      return {
        ...initialState,
        user: action.payload
      }
    case REGISTER_FAIL:
      return {
        ...initialState,
        errors: action.payload
      }
    default:
      return state
  }
}

