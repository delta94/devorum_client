import { PROFILE } from '../constance/actionTypes'

const initialState = {
  profile: null,
  profiles: null,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    // Waiting server response
    case PROFILE.LOADING:
      return {
        ...state,
        loading: true
      }
    // Successfully to get current user profile
    case PROFILE.CURRENT:
      return {
        ...state,
        profile: action.payload,
        loading: false
      }
    case PROFILE.CLEAR:
      return {
        ...state,
        profile: null
      }
    default:
      return state
  }
}