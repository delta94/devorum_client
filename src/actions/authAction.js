import axios from 'axios'

import { registerUri } from '../constance/api'
import { REGISTER_DONE, REGISTER_FAIL} from './types'

// Register User
export const registerUser = userData => dispatch => {
  axios.post(registerUri, userData)
    .then(res => dispatch({
      type: REGISTER_DONE,
      payload: res
    }))
    .catch(error => dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data
    }))
}