import axios from 'axios'

import api from '../constance/api'
import { REGISTER_DONE, SET_CURRENT_USER, GET_ERRORS } from './types'
import { setAuthToken } from '../utils/setAuthToken'

// Jwt decoder
import jwt_decode from 'jwt-decode'

// Register User
export const registerDispatch = (userData, history) => dispatch => {
  axios.post(api.register, userData)
    .then(response => {
      history.push('/')
      dispatch({
        type: REGISTER_DONE,
        payload: response.data
      })
    })
    .catch(error => dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    }))
}

// Login - Get user token
export const loginDispatch = userData => dispatch => {
  axios.post(api.login, userData)
    .then(response => {
      // Get user token
      const { token } = response.data

      // Save token to localStorage
      localStorage.setItem('devorum_jwt', token)

      // Set token to Auth header
      setAuthToken(token)

      // Decode token to get user data
      const decoded = jwt_decode(token)
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      })
    })
    .catch(error => dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    }))
}