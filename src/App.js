import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Components
import Root from './hocs/root'
import Navbar from './containers/Navbar'
import Footer from './components/Layout/Footer'
import Landing from './components/Layout/Landing'
import Dashboard from './containers/Dashboard'

// Redux Store
import store from './store'
import jwt_decode from 'jwt-decode'
import { setCurrentUser } from './actions/authAction'
import { logoutDispatch } from './actions/authAction'
import { clearCurrentProfile } from './actions/profileAction'

// Verify Token when App loaded
if(localStorage.devorum_jwt) {
  const token = localStorage.devorum_jwt
  const decoded = jwt_decode(token)

  // Set current user if token valid
  store.dispatch(setCurrentUser(decoded))

  // Check lifetime of token
  const currentTime = Date.now() / 1000; // milisecond

  // If token invalid -> Log user out
  if(decoded.exp < currentTime) {
    store.dispatch(logoutDispatch(null))
    store.dispatch(clearCurrentProfile())
    window.location.href = '/'
  }
}

const AuthComponents = (<>
  <Landing />
  <Footer fixed />
</>)

export default class App extends Component {
  render() {
    return (<Root>
      <Navbar />
        <Route exact path='/' render={() => AuthComponents} />
        <Route exact path='/register' render={() => AuthComponents} />
        <Route exact path='/dashboard' component={Dashboard} />
    </Root>)
  }
}