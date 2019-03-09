import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Components
import Root from './hocs/root'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Landing from './components/Layout/Landing/Landing'

export default class App extends Component {
  render() {
    return (<Root>
      <Navbar brand='Devorum' />
        <Route exact path='/' component={Landing} />
        <Route exact path='/register' component={Landing} />
      <Footer fixed />
    </Root>)
  }
}