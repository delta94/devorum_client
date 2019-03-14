const baseUri = 'https://devorum.herokuapp.com/api/'
const bindLink = path => `${baseUri + path}`

export default {
  register: bindLink('users/register'),
  login: bindLink('users/login')
}