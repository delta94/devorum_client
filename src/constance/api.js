const baseUri = 'http://localhost:3000/api/'
const bindLink = path => `${baseUri + path}`

export default {
  register: bindLink('users/register'),
  login: bindLink('users/login')
}