import { SET_ERRORS } from '../constance/actionTypes'

export const setErrors = ({ response: { data } }) => ({
  type: SET_ERRORS,
  payload: data
})

export const clearErrors = () => {
  console.clear()
  return {
    type: SET_ERRORS,
    payload: {}
  }
}