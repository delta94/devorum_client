import axios from 'axios'

// Static data source
import api from '../constance/api'
import { REGISTER_DONE, SET_CURRENT_USER } from '../constance/actionTypes'

// Handle token utils
import { setAuthToken } from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

// Action Creators
import { setErrors, clearErrors }from './errorsAction'

// @func | Action creator current user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
})

// @Dispatch | Register User
export const registerDispatch = (userData, history) => dispatch => {
  axios.post(api.register, userData)
    .then(response => {
      dispatch(clearErrors())
      dispatch({
        type: REGISTER_DONE,
        payload: response.data
      })
      history.push('/')
    })
    .catch(error => dispatch(setErrors(error)))
}

// @Dispatch | Login User
export const loginDispatch = userData => dispatch => {
  axios.post(api.login, userData)
    .then(response => {
      dispatch(clearErrors())
      // Get user token && save to localStorage
      const { token } = response.data
      localStorage.setItem('devorum_jwt', token)

      // Set token to Auth header && decode token
      setAuthToken(token)
      const decoded = jwt_decode(token)

      // Set state Redux Store
      dispatch(setCurrentUser(decoded))
    })
    .catch(error => dispatch(setErrors(error)))
}

// @Dispatch | Log out
export const logoutDispatch = history => dispatch => {
  // Remove token from localStorage & axios default config
  localStorage.removeItem('devorum_jwt')
  setAuthToken(false)

  // Restore auth state in Redux Store
  dispatch(setCurrentUser({}))

  if(history) history.push('/')
}