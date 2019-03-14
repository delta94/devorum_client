import { PROFILE } from '../constance/actionTypes'

// We need axios to interact with APIs
import axios from 'axios'
import api from '../constance/api'

// Action creators
export const setProfileLoading = () => ({ type: PROFILE.LOADING })

// @GET_CURRENT_PROFILE
export const getCurrentProfile = () => dispatch => {

  dispatch(setProfileLoading())

  // Send GET Request
  axios.get(api.profile.current)
    .then(response => dispatch({
      type: PROFILE.CURRENT,
      payload: response.data
    }))
    .catch(() => {
      console.clear()
      dispatch({
        type: PROFILE.CURRENT,
        payload: {}
      })
    })
}

export const clearCurrentProfile = () => dispatch => dispatch({ type: PROFILE.CLEAR })