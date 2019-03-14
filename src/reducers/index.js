import { combineReducers } from 'redux'

// Reducers
import authReducer from './authReducer'
import errorsReducer from './errorReducer'
import profileReducer from './profileReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  profile: profileReducer
})