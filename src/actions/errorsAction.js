import { SET_ERRORS } from './types'

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