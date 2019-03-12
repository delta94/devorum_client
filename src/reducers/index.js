import { combineReducers } from 'redux'

// Reducers
import authReducer from './authReducer'
import errorsReducer from './errorReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer
})