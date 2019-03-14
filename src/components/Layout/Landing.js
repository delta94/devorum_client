import React, { Component } from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

// Components
import LogInForm from '../../containers/Login'
import SignUpForm from '../../containers/Register'

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`

export default class Landing extends Component {
  render() {
    return (<Wrapper>
      <Route exact path='/' component={LogInForm} />
      <Route exact path='/register' component={SignUpForm} />
    </Wrapper>)
  }
}