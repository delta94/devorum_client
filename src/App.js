import React, { Component } from 'react'

// Components
import Root from './hocs/root'
import Navbar from './containers/Navbar'
import Footer from './components/Layout/Footer'
import Landing from './components/Layout/Landing'

// Redux Store
import store from './store'
import jwt_decode from 'jwt-decode'
import { setCurrentUser } from './actions/authAction'
import { logoutDispatch } from './actions/authAction'

// Set current user whenever application loaded
if(localStorage.devorum_jwt) {
  const token = localStorage.devorum_jwt
  const decoded = jwt_decode(token)

  // Use action creator to set current user
  store.dispatch(setCurrentUser(decoded))

  // Check timeout token
  const currentTime = Date.now() / 1000; // milisecond
  if(decoded.exp < currentTime) {
    store.dispatch(logoutDispatch(null))
    window.location.href = '/'
  }
}

export default class App extends Component {
  render() {
    return (<Root>
      <Navbar />
      <Landing />
      <Footer fixed />
    </Root>)
  }
}