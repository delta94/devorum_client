const baseUri = 'https://devorum.herokuapp.com/api/'
const bindLink = path => `${baseUri + path}`

export default {
  register: bindLink('users/register'),
  login: bindLink('users/login'),
  profile: {
    current: bindLink('profile'),
    handle: bindLink('profile/handle/'),
    all: bindLink('profile/all'),
    experience: bindLink('profile/experience'),
    education: bindLink('profile/education')
  }
}